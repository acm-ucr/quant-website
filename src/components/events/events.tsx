"use client";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./event";

type EventProps = {
  day: string;
  date: string;
  title: string;
  location: string;
  time: string;
  description: string;
};

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
    .map((item: ApiEvent) => ({
      day: new Date(
        item.start.dateTime || item.start.date || new Date(),
      ).toLocaleDateString(),
      date: new Date(
        item.start.dateTime || item.start.date || new Date(),
      ).toLocaleDateString(),
      title: item.summary || "Unnamed Event",
      location: item.location || "N/A",
      time: item.start.dateTime
        ? new Date(item.start.dateTime)
            .toLocaleTimeString([], { hour: "numeric", hour12: true })
            .replace(/(AM|PM)/i, (match) => match.toLowerCase())
        : "All day",
      description: item.description || "",
    }))
    .slice(0, 3);
};

const Events = () => {
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

  if (events.length === 0)
    return (
      <p className="my-10 flex items-center justify-center font-questrial text-3xl text-white">
        No Upcoming Events
      </p>
    );

  if (error)
    return (
      <p className="my-10 flex items-center justify-center font-questrial text-3xl text-white">
        Error fetching events
      </p>
    );

  return (
    <div className="flex w-full flex-col gap-2 text-3xl sm:gap-5">
      {events.map((event, index) => (
        <div className="mb-4 flex items-center justify-center" key={index}>
          <EventCard
            day={new Date(event.date).toLocaleString("en-US", {
              weekday: "short",
            })}
            date={new Date(event.date).getDate().toString().padStart(2, "0")}
            title={event.title}
            location={event.location}
            time={event.time}
            description={event.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Events;
