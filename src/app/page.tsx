import TechStack from "@/components/home/techstack";
import Landing from "../components/home/landing";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Landing />
      <TechStack />
      <Header title="UPCOMING EVENTS" />
    </div>
  );
};

export default Home;
