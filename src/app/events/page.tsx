import EventCards from "@/components/events/events";
import Events from "@/components/events/calendar";

const EventsPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Events />
      <EventCards />
    </div>
  );
};

export default EventsPage;
