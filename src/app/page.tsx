import TechStack from "@/components/home/techstack";
import Landing from "../components/home/landing";
import Example from "../components/example";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Example text1="Adjust" text2="these" text3="Props" />
      <Landing />
      <TechStack />
    </div>
  );
};

export default Home;
