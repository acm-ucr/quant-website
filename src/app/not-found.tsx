import Image from "next/image";
import GRID from "@/public/grid.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative mb-[20%] mt-[20%] flex w-full flex-col content-center items-center justify-center">
      <Image src={GRID} alt="grid" className="-z-10 w-4/5" />
      <div className="absolute left-1/2 top-[47%] flex w-4/5 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="font-mono text-6xl leading-none text-quant-white md:text-[150px]">
            404
          </h1>
          <div className="w-2/3 border-b-4 border-[#5BC6ED]"></div>
        </div>
        <div>
          <h2 className="font-questrial text-3xl font-bold leading-none text-quant-white">
            PAGE NOT FOUND
          </h2>
        </div>
        <div className="p-9">
          <Link
            href="/"
            className="rounded-full border-2 border-white bg-[#87C3F2] px-6 py-2 font-hanken text-lg font-bold text-quant-navy sm:text-xl md:text-2xl"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
