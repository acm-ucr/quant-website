import "./globals.css";
import { ReactQueryClientProvider } from "@/utils/react-query";
import { Jost, Roboto, Questrial, Hanken_Grotesk } from "next/font/google";

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
  variable: "--hanken_grotesk-font",
});

export const metadata = {
  title: "UCR Quant",
  description: "Quantitative Analysis club @ UCR",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${roboto.variable} ${questrial.variable} ${hanken_grotesk.variable}`}
      >
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
