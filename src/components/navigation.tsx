"use client";
import Logo from "@/public/navbar/logo.webp";
import Bar from "@/public/navbar/task_bar.webp";
import ExitBar from "@/public/navbar/exit_bar.webp";
import Image from "next/image";
import Link from "next/link";
import NavItems from "@/data/navigation";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

interface NavItems {
  name: string;
  link: string;
}

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const pathname = usePathname();
  return (
    <div>
      <div
        className={`mx-5 my-5 flex h-20 items-center justify-between sm:px-12 ${isNavOpen ? "border-b-2" : "border-b-0"}`}
      >
        <div className={`flex:row flex border-b-quant-white sm:gap-3`}>
          <div className="flex w-14 items-center justify-center lg:hidden">
            {!isNavOpen ? (
              <button onClick={() => setIsNavOpen(!isNavOpen)}>
                <Image src={Bar} alt="task bar" className="h-full w-full" />
              </button>
            ) : (
              <button onClick={() => setIsNavOpen(!isNavOpen)}>
                <Image
                  src={ExitBar}
                  alt="exit task bar"
                  className="h-full w-full"
                />
              </button>
            )}
          </div>
          <Link href="/">
            <div className="flex w-[12.5rem] flex-row bg-gradient-to-l from-[#272592] via-[#272592] to-[#100F48]">
              <Image src={Logo} alt="Logo" className="w-[35%]" />
              <div className="flex items-center pl-2 font-istok-web text-xl font-bold text-white">
                Quant Club at UCR
              </div>
            </div>
          </Link>
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://discord.gg/bzCbpzZRtH"}
          className={
            "ml-[0.5rem] flex h-11 w-[8rem] items-center justify-center rounded-3xl bg-[#C6C6E4] font-hanken text-xs font-semibold hover:underline min-[400px]:text-lg md:w-[10rem]"
          }
        >
          JOIN US
        </Link>
      </div>
      {isNavOpen ? (
        <div className="absolute left-0 z-10 flex w-full flex-col">
          <div className="flex w-full flex-col gap-10 border-b-2 border-b-quant-white bg-[#100E37] pb-10 pl-20 font-jost text-4xl font-medium text-white">
            {NavItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.link}
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  className={`hover:underline ${
                    pathname === item.link ? "font-extrabold" : "border-0"
                  }`}
                >
                  {item.name}
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
