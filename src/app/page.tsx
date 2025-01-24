import TechStack from "@/components/home/techstack";
import Landing from "../components/home/landing";

const Home = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Landing />
      <TechStack />
    </div>
  );
};

export default Home;
