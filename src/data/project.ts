import image_src from "@/public/projects/exampleACM.svg";
import { StaticImageData } from "next/image";

interface Project {
  image: StaticImageData;
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    image: image_src,
    name: "Project Finoria",
    description:
      "Finoria is a financial assistant designed to support day traders with data-driven insights. It leverages AI-powered analysis to provide personalized market assessments, helping traders make informed decisions. By combining technology with financial expertise, Finoria delivers real-time analytics and tailored recommendations to enhance trading strategies. It is open and extensibile for future members to contribute to.",
  },
  {
    image: image_src,
    name: "Project Two",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit. Sed sit amet justo magna. Vivamus malesuada, odio quis consectetur convallis, nulla erat feugiat risus, ut ultricies velit ex eu odio. Cras aliquet euismod ipsum nec rutrum. Integer in lorem id ipsum gravida convallis. Sed nec risus vel purus varius eleifend. Nunc id molestie nisl. Sed ac ante quis nisl tincidunt feugiat. Maecenas pharetra libero ut nunc vulputate, in mattis velit ultricies. Maecenas tincidunt magna a nisl bibendum, nec auctor nunc iaculis. ",
  },
  {
    image: image_src,
    name: "Project Three",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan urna nec libero fringilla, ac fermentum purus tempus. Sed et nisi velit. Sed sit amet justo magna. Vivamus malesuada, odio quis consectetur convallis, nulla erat feugiat risus, ut ultricies velit ex eu odio. Cras aliquet euismod ipsum nec rutrum. Integer in lorem id ipsum gravida convallis. Sed nec risus vel purus varius eleifend. Nunc id molestie nisl. Sed ac ante quis nisl tincidunt feugiat. Maecenas pharetra libero ut nunc vulputate, in mattis velit ultricies. Maecenas tincidunt magna a nisl bibendum, nec auctor nunc iaculis. ",
  },
];

export default projects;
