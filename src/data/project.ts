import image_src from "@/public/projects/exampleACM.svg";
import { StaticImageData } from "next/image";

interface Project {
  image: StaticImageData;
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    image: image_src,
    name: "Project Finoria",
    description:
      "Finoria is a financial assistant designed to support day traders with data-driven insights. It leverages AI-powered analysis to provide personalized market assessments, helping traders make informed decisions. By combining technology with financial expertise, Finoria delivers real-time analytics and tailored recommendations to enhance trading strategies. It is open and extensibile for future members to contribute to.",
    link: "https://finoria.org/",
  },
];

export default projects;
