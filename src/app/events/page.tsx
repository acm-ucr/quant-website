import EventCard from "@/components/events/event";

const Events = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-950">
      <EventCard
        day="Mon"
        date="09"
        title="General Meeting"
        location="Location"
        time="3 pm"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit."
      />
    </div>
  );
};

export default Events;
