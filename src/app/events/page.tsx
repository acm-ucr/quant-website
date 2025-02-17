"use client";
import EventCard from "@/components/events/event";
import Calendar from "@/components/events/calendar/Calendar";
import { EventProps } from "@/components/ui/calendar";
import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "framer-motion";

interface GoogleCalendarEvents {
  start: {
    dateTime?: string;
    date?: string;
  };
  summary: string;
  location?: string;
  description?: string;
}

const Events = () => {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true });

  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY;
      const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL;

      if (!apiKey || !calendarId) {
        console.error("API Key or Calendar ID is missing.");
        return;
      }

      const today = new Date();
      const timeMin = new Date(today);
      timeMin.setMonth(today.getMonth() - 2);
      const timeMinISO = timeMin.toISOString();
      const timeMax = new Date(today);
      timeMax.setMonth(today.getMonth() + 2);
      const timeMaxISO = timeMax.toISOString();

      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&orderBy=startTime&singleEvents=true&timeMin=${encodeURIComponent(
        timeMinISO,
      )}&timeMax=${encodeURIComponent(timeMaxISO)}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const formattedEvents: EventProps[] = data.items.map(
          (event: GoogleCalendarEvents) => ({
            date: new Date(event.start.dateTime || event.start.date || ""),
            title: event.summary || "No Title",
            startTime: event.start.dateTime || event.start.date || "",
            location: event.location || "N/A",
            description: event.description || "N/A",
          }),
        );

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching events from Google Calendar:", error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div className="flex min-h-screen w-full items-center justify-center gap-10">
      <EventCard
        day="Mon"
        date="09"
        title="General Meeting"
        location="Location"
        time="3 pm"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit."
      />
      {/* <Events /> */}
      <div ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 1 }}
        >
          <Calendar events={events} />
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
