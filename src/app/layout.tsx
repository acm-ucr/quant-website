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
        className={`${jost.variable} ${roboto.variable} ${questrial.variable} ${hanken_grotesk.variable} ${istok_web.variable} flex flex-col justify-between bg-[#100E37]`}
      > 

        <div className="fixed top-0 left-0 right-0 bottom-0 -z-50 pointer-events-none select-none opacity-70 overflow-hidden mt-[-200px]">
          <svg width="1440" height="2626" viewBox="0 0 1440 2626" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="1196.27" cy="472.797" rx="417.629" ry="368.558" fill="url(#paint0_radial_0_1)"/>
          <g filter="url(#filter1_f_0_1)">
          <ellipse cx="150.339" cy="1440.37" rx="417.629" ry="516.952" fill="url(#paint1_radial_0_1)"/>
          </g>
          <g filter="url(#filter2_f_0_1)">
          <ellipse cx="1270.12" cy="1957.32" rx="417.629" ry="368.558" fill="url(#paint2_radial_0_1)"/>
          </g>
          <defs>
          <filter id="filter0_f_0_1" x="478.637" y="-195.761" width="1435.26" height="1337.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_1"/>
          </filter>
          <filter id="filter1_f_0_1" x="-567.291" y="623.416" width="1435.26" height="1633.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_1"/>
          </filter>
          <filter id="filter2_f_0_1" x="552.492" y="1288.76" width="1435.26" height="1337.12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_1"/>
          </filter>
          <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1196.27 472.797) rotate(90) scale(368.558 417.629)">
          <stop stop-color="#773DB9" stop-opacity="0.49"/>
          <stop offset="1" stop-color="#0F0E37"/>
          </radialGradient>
          <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(150.339 1440.37) rotate(90) scale(516.952 417.629)">
          <stop stop-color="#1388EC" stop-opacity="0.49"/>
          <stop offset="1" stop-color="#0F0E37"/>
          </radialGradient>
          <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1270.12 1957.32) rotate(90) scale(368.558 417.629)">
          <stop stop-color="#3045D3" stop-opacity="0.5"/>
          <stop offset="1" stop-color="#0F0E37"/>
          </radialGradient>
          </defs>
          </svg>
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