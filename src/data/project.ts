import Finoria from "@/public/projects/Finoria.png";
import VCScreener from "@/public/projects/VCScreener.jpg"
import { StaticImageData } from "next/image";

interface Project {
  image: StaticImageData;
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    image: VCScreener,
    name: "VC Screener",
    link:"https://vcscreener.org/",
    description: "VC Screener is an agentic venture capital associate designed to optimize Y Combinator applications through data-driven analysis. It benchmarks pitches against patterns identified from thousands of accepted companies, allowing founders to stop guessing and see how they stack up against the best. The tool provides a deep-dive review with clear, actionable instructions on exactly what to improve to increase acceptance odds."
  },
  {
    image: Finoria,
    name: "Project Finoria",
    description:
      "Finoria is a financial assistant designed to support day traders with data-driven insights. It leverages AI-powered analysis to provide personalized market assessments, helping traders make informed decisions. By combining technology with financial expertise, Finoria delivers real-time analytics and tailored recommendations to enhance trading strategies. It is open and extensibile for future members to contribute to.",
    link: "https://finoria.org/",
  },
];

export default projects;
