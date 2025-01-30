import Image from "next/image";
import GRID from "@/public/grid.svg";
import Link from "next/link";

const NotFound = () => {
  return (
      <div className="mt-[20%] mb-[20%] relative w-full flex flex-col justify-center items-center content-center">
        <Image src={GRID} alt="grid" className="w-4/5 -z-10"/>
          <div className="absolute top-[47%] left-1/2 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 gap-5 w-4/5">
            <div className="text-center flex flex-col items-center justify-center">
              <h1 className="text-quant-white text-6xl md:text-[150px] leading-none font-mono">404</h1>
              <div className="border-b-4 w-2/3 border-[#5BC6ED]"></div>
            </div>
            <div>
              <h2 className="text-3xl leading-none font-questrial text-quant-white font-bold">PAGE NOT FOUND</h2>
            </div>
            <div className="p-9">
              <Link href="/" className="bg-[#87C3F2] rounded-full text-lg sm:text-xl md:text-2xl border-2 border-white px-6 py-2 font-hanken text-quant-navy font-bold">Back to Home</Link>
            </div>
          </div>
      </div>
  );
};

export default NotFound;
