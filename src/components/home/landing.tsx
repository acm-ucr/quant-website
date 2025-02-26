import Image from "next/image";
import CHART from "@/public/chart.svg";

const Landing = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-[#0F0E37]">
      <Image src={CHART} alt="Line chart" className="" />
    </div>
  );
};

export default Landing;
