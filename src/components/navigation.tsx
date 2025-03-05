"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/public/navbar/logo.webp";
import Bar from "@/public/navbar/task_bar.webp";
import ExitBar from "@/public/navbar/exit_bar.webp";
import NavItems from "@/data/navigation";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();
  return (
    <div>
      <div
        className={`mx-5 my-5 flex h-20 items-center justify-between sm:px-12 ${isNavOpen ? "border-b-2" : "border-b-0"} `}
      >
        <div className={`flex:row flex border-b-quant-white gap-2 pr-8`}>
          <div className="flex w-14 items-center justify-center lg:hidden">
            {!isNavOpen ? (
              <button onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}>
                <Image src={Bar} alt="task bar" className="h-full w-full" />
              </button>
            ) : (
              <button onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}>
                <Image
                  src={ExitBar}
                  alt="exit task bar"
                  className="h-full w-full"
                />
              </button>
            )}
          </div>
          <Link href="/">
            <div
              className="flex md:w-[12.5rem] w-[5] flex-row bg-gradient-to-l from-[#272592] via-[#272592] to-[rgb(16,15,72)]"
              onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
            >
              <Image src={Logo} alt="Logo" className="md:w-[35%] w-[30%]" />
              <div className="flex items-center pl-2 font-istok-web font-bold text-white md:text-xl text-md pr-3">
                Quant Club at UCR
              </div>
            </div>
          </Link>
        </div>
        {!isNavOpen ? (
          <div className="hidden w-1/3 flex-row items-center justify-around gap-10 font-jost text-xl font-medium text-white lg:flex lg:gap-0">
            {NavItems.map(({ link, name }, i) => {
              return (
                <Link
                  key={i}
                  href={link}
                  className={`hover:underline ${
                    pathname === link ? "font-extrabold" : "border-0"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        ) : null}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://discord.gg/bzCbpzZRtH"}
          className={
            "group relative ml-[0.5rem] flex h-11 w-[8rem] items-center justify-center rounded-3xl bg-[#C6C6E4] font-hanken text-xs font-semibold duration-200 hover:scale-105 hover:border-blue-300 hover:bg-white hover:text-quant-navy min-[400px]:text-lg sm:text-xl md:w-[10rem] md:text-2xl"
          }
        >
          <span className="group relative">
            JOIN US
            <span className="absolute bottom-[0.1em] left-0 h-[0.1em] w-0 bg-quant-navy transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </div>
      {isNavOpen ? (
        <div className="absolute left-0 z-10 flex w-full flex-col">
          <div className="flex w-full flex-col gap-10 border-b-2 border-b-quant-white bg-[#100E37] pb-10 pl-20 font-jost text-4xl font-medium text-white">
            {NavItems.map(({ link, name }, i) => {
              return (
                <Link
                  key={i}
                  href={link}
                  onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)}
                  className={`hover:underline ${
                    pathname === link ? "font-extrabold" : "border-0"
                  }`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="h-screen w-screen bg-[#100E37]/50"></div>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
