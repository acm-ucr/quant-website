import Image from "next/image";
import CHART from "@/public/chart.svg";

const Landing = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <p className="absolute font-jost text-5xl font-bold md:text-7xl xl:text-9xl">
        Quant at UCR
      </p>
      <Image src={CHART} alt="Line chart" />
    </div>
  );
};

export default Landing;
