import { FooterArray } from "@/data/Footer";
import NextImage from "next/image";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto text-white">
        <div className="relative">
          <div className="h-[2px] w-full bg-white" />
          <div className="absolute right-[-8px] top-1/2 -translate-y-1/2">
            <ChevronRight className="text-white" size={20} />
          </div>
        </div>

        <div className="flex items-center justify-between pb-12 pl-2 pt-4">
          <div className="flex items-center gap-5">
            <NextImage
              src="/footer/logo.webp"
              alt="logo"
              width={70.8}
              height={82.4}
            />
            <div className="flex flex-col font-istok-web text-xl font-semibold">
              <div>Quant Club</div>
              <div>at UCR</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-2">
            <div className="font-hanken text-lg font-semibold underline">
              <p>Contact Us</p>
            </div>
            <div className="flex gap-8">
              {FooterArray().map((item, i) => {
                return (
                  <a key={i} href={item.link} className="text-white">
                    <item.icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
