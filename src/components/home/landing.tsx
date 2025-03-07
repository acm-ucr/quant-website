import Image from "next/image";
import CHART from "@/public/chart.svg";

const Landing = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image src={CHART} alt="Line chart" />
    </div>
  );
};

export default Landing;
