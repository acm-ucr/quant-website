"use client";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./event";
import { motion } from "framer-motion";

type EventProps = Partial<{
  day: string;
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
}>;

type ApiEvent = {
  summary?: string;
  description?: string;
  location?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
};

const fetchEvents = async (): Promise<EventProps[]> => {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
    }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
        &singleEvents=true&orderBy=startTime&timeMin=${new Date().toISOString()}`,
  );
  if (!response.ok) {
    throw new Error("Error fetching events");
  }

  const data = await response.json();

  return (data.items || [])
    .map(({ summary, description, location, start }: ApiEvent) => ({
      day: new Date(
        start.dateTime || start.date || new Date(),
      ).toLocaleDateString(),
      date: new Date(
        start.dateTime || start.date || new Date(),
      ).toLocaleDateString(),
      title: summary || "Unnamed Event",
      location: location || "N/A",
      time: start.dateTime
        ? new Date(start.dateTime)
            .toLocaleTimeString([], { hour: "numeric", hour12: true })
            .replace(/(AM|PM)/i, (match) => match.toLowerCase())
        : item.start.date
          ? new Date(item.start.date)
              .toLocaleTimeString([], { hour: "numeric", hour12: true })
              .replace(/(AM|PM)/i, (match) => match.toLowerCase())
          : "N/A",
      description: item.description || "",
    }))
    .slice(0, 3);
};

const eventsVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Events = () => {
  const [current, setCurrent] = useState<EventProps>({});
  const {
    data: events = [],
    error,
    isLoading,
  } = useQuery<EventProps[], Error>({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading)
    return (
      <p className="my-10 flex items-center justify-center font-questrial text-3xl text-white">
        Loading events...
      </p>
    );

  if (error)
    return (
      <p className="my-10 flex items-center justify-center font-questrial text-3xl text-white">
        Error fetching events
      </p>
    );

  if (events.length === 0)
    return (
      <p className="my-10 flex items-center justify-center font-questrial text-3xl text-white">
        No Upcoming Events
      </p>
    );

  return (
    <>
      {
        <Dialog
          open={Object.keys(current).length > 0}
          onOpenChange={() => setCurrent({})}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <p className="text-xl">{current.title}</p>
                <p className="text-base font-questrial">
                  {current.location} from{" "}
                  {new Date(current.date as string).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  )}{" "}
                  to{" "}
                </p>
              </DialogTitle>
              <DialogDescription>{current.description}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      }
      <Calendar
        mode="single"
        selected={new Date()}
        className="w-full rounded-md border"
        events={[]}
        setCurrent={setCurrent}
      />
    </>
  );
};

export default Events;
