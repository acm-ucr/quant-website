import Image from "next/image";
import leftLine from "/public/header/left-line.svg";
import rightLine from "/public/header/right-line.svg";

const Header = (props: { title: string }) => {
  return (
    <div className="w-full py-5">
      <div className="hidden w-full py-5 md:flex">
        <div className="mx-auto flex w-3/4 items-center justify-center gap-20">
          <Image
            src={leftLine}
            alt="left-line"
            aria-hidden="true"
            className="flex h-full"
          />

          <div className="text-center font-hanken text-5xl font-bold text-white">
            {props.title}
          </div>

          <Image
            src={rightLine}
            alt="right-line"
            aria-hidden="true"
            className="flex h-full"
          />
        </div>
      </div>

      <div className="flex w-full py-5 md:hidden">
        <div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-4">
          <div className="relative inline-block text-center font-hanken text-4xl font-bold text-white">
            {props.title}
            <div className="mt-2 h-1 w-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
