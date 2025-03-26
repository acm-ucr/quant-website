import Image from "next/image";
import CHART from "@/public/chart.svg";

const Landing = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <p className="absolute font-jost text-6xl font-bold md:text-9xl">
        Welcome to Quant!
      </p>
      <Image src={CHART} alt="Line chart" />
    </div>
  );
};

export default Landing;
