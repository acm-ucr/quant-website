import EventCards from "@/components/events/events";
import Events from "@/components/events/calendar";
import Header from "@/components/header";

const EventsPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <Events />
      <Header>Upcoming Events</Header>
      <EventCards />
    </div>
  );
};

export default EventsPage;
