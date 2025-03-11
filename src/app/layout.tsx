import NavBar from "@/components/navigation";
import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import {
  Jost,
  Roboto,
  Questrial,
  Hanken_Grotesk,
  Istok_Web,
} from "next/font/google";
import Footer from "@/components/footer";
import Image from "next/image";
import BackgroundEllipses from "@/public/background/Ellipses.svg";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--jost-font",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--roboto-font",
});

const questrial = Questrial({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--questrial-font",
});

const hanken_grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--hanken-grotesk-font",
});

const istok_web = Istok_Web({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--istok-web-font",
});

export const metadata = {
  title: "UCR Quant",
  description: "Quantitative Analysis Club @ UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${roboto.variable} ${questrial.variable} ${hanken_grotesk.variable} ${istok_web.variable} relative flex flex-col justify-between bg-[#100E37]`}
      >
        <div className="pointer-events-none absolute inset-0 -z-50 mt-[-200px] select-none overflow-hidden opacity-70">
          <Image src={BackgroundEllipses} alt="" aria-hidden="true" />
        </div>

        <NavBar />
        <div className="flex w-full flex-col items-center justify-center text-white">
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
