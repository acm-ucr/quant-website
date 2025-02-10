import EventCard from "@/components/events/event";
import Header from "../../components/header";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header title="MONTH" variant="arrowsTwo" />
      <Header title="UPCOMING EVENTS" />
      <div className="flex h-full w-full items-center justify-center">
        <EventCard
          day="Mon"
          date="09"
          title="General Meeting"
          location="Location"
          time="3 pm"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit."
        />
      </div>
    </div>
  );
};

export default Events;
