import Header from "../components/header";
import Events from "@/components/events/events";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Header title="UPCOMING EVENTS" />
      <Events />
    </div>
  );
};

export default Home;
