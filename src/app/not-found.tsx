import Image from "next/image";
import GRID from "@/public/grid.svg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col content-center items-center justify-center">
      <Image src={GRID} alt="grid" className="-z-10 w-4/5" />
      <div className="absolute left-1/2 top-[47%] flex w-4/5 -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-quant-white font-mono text-6xl leading-none md:text-9xl">
            404
          </div>
          <div className="w-2/3 border-b-4 border-[#5BC6ED]"></div>
        </div>
        <div>
          <div className="text-quant-white font-questrial text-3xl font-bold leading-none">
            PAGE NOT FOUND
          </div>
        </div>
        <div className="p-9">
          <Link
            href="/"
            className="text-quant-navy hover:text-quant-navy group relative inline-block rounded-full border-2 border-white bg-blue-300 px-6 py-2 font-hanken text-lg font-bold duration-200 hover:scale-105 hover:border-blue-300 hover:bg-white sm:text-xl md:text-2xl"
          >
            {/* wrapping text in another span to make underline animation */}
            <span className="relative">
              Back to Home
              {/* underline animation, left and bottom to set initial position, w and h to set initial length and thickness*/}
              <span className="bg-quant-navy absolute bottom-[0.1em] left-0 h-[0.1em] w-0 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
