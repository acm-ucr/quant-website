import Image from "next/image";
import leftLine from "/public/header/left-line.svg";
import rightLine from "/public/header/right-line.svg";

const Header = (props: { title: string }) => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-800 py-5">
      <div className="mx-auto flex w-3/4 items-center justify-center gap-20">
        <Image
          src={leftLine}
          alt="left-line"
          aria-hidden="true"
          className="flex h-full"
        />

        <h1 className="text-center font-hanken text-5xl font-bold text-white">
          {props.title}
        </h1>

        <Image
          src={rightLine}
          alt="right-line"
          aria-hidden="true"
          className="flex h-full"
        />
      </div>
    </div>
  );
};

export default Header;
