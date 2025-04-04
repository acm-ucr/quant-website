import FooterArray from "@/data/footer";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import footerLogo from "@/public/footer/logo.webp";

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-20">
      <div className="container mx-auto text-white">
        <div className="relative">
          <div className="h-[2px] w-full bg-white" />
          <ChevronRight className="size={20} absolute right-[-8px] top-1/2 hidden -translate-y-1/2 text-white sm:block" />
        </div>
        {/* mobile layout */}
        <div className="flex flex-col items-center gap-6 pb-12 pt-4 sm:hidden">
          <Image src={footerLogo} alt="logo" className="h-16 w-16" />
          <div className="flex gap-5">
            {FooterArray.map(({ icon: Icon, link }, i) => {
              return (
                <Link key={i} href={link} className="text-white">
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>
        </div>

        {/* desktop layout */}
        <div className="hidden items-center justify-between pb-12 pl-2 pt-4 sm:flex">
          <div className="flex items-center gap-5">
            <Image src={footerLogo} alt="logo" className="h-20 w-20" />
            <div className="flex flex-col font-istok-web text-xl font-semibold">
              <div>Quant Club</div>
              <div>at UCR</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pt-2">
            <p className="font-hanken text-lg font-semibold">Contact Us</p>
            <div className="flex gap-8">
              {FooterArray.map(({ icon: Icon, link }, i) => {
                return (
                  <Link
                    key={i}
                    href={link}
                    target="_blank"
                    className="text-white transition-transform duration-300 hover:scale-125"
                  >
                    <Icon size={24} />
                  </Link>
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
