import Image from "next/image";
import leftLine from "/public/header/left-line.svg";
import rightLine from "/public/header/right-line.svg";
import leftArrow from "/public/header/chevron-left.svg";
import rightArrow from "/public/header/chevron-right.svg";

type HeaderProps = {
  title: string;
  variant?: "arrows" | "underline" | "arrowsTwo";
};

const Header = ({ title, variant = "arrows" }: HeaderProps) => {
  return (
    <div className="w-full py-5">
      {variant === "arrows" ? (
        <div className="hidden w-full py-5 md:flex">
          <div className="mx-auto flex w-3/4 items-center justify-center gap-20">
            <Image
              src={leftLine}
              alt="left-line"
              aria-hidden="true"
              className="flex h-full"
            />

            <div className="text-center font-hanken text-5xl font-bold text-white">
              {title}
            </div>

            <Image
              src={rightLine}
              alt="right-line"
              aria-hidden="true"
              className="flex h-full"
            />
          </div>
        </div>
      ) : variant === "underline" ? (
        <div className="hidden w-full py-5 md:flex">
          <div className="mx-auto flex w-3/4 flex-col items-center justify-center">
            <div className="relative inline-block text-center font-hanken text-5xl font-bold text-white">
              {title}
              <div className="mt-0 h-1 w-full bg-white"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden w-full items-center justify-center gap-x-12 py-5 md:flex">
          <Image
            src={leftArrow}
            alt="left-arrow"
            aria-hidden="true"
            className="flex h-full"
          />
          <div className="text-center font-hanken text-5xl font-bold text-white">
            {title}
          </div>
          <Image
            src={rightArrow}
            alt="right-arrow"
            aria-hidden="true"
            className="flex h-full"
          />
        </div>
      )}

      <div className="flex w-full py-5 md:hidden">
        <div className="mx-auto flex w-3/4 flex-col items-center justify-center gap-4">
          <div className="relative inline-block text-center font-hanken text-2xl font-bold text-white">
            {title}
            <div className="mt-0 h-1 w-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
