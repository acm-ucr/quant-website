import Landing from "../components/home/landing";
import Description from "@/components/home/description";
import TechStack from "@/components/home/techstack";
import Chart from "@/public/assets/chartimage.webp";
import Analyze from "@/public/assets/Analyze.webp";
import Header from "../components/header";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      <Header title="Our Tech Stack" variant="underline" />
      <Landing />
      <Description
        title="What is Quant Club?"
        description="The Quantitative Analysis Club at UCR provides a structured approach to learning quantitative finance and data science. Through workshops, guest lectures, and networking events, members gain practical experience in financial modeling, statistical analysis, and machine learning applications. We serve as a platform for students to develop the technical and analytical skills required in quantitative research roles."
        image={Chart}
      />
      <TechStack />
      <Description
        title="Why Join Us?"
        description="We offer hands-on experience with real-world quantitative methods used in finance and data science. Members engage in coding exercises, research projects, and discussions on industry trends. We provide networking opportunities with professionals and peers who share an interest in quantitative analysis, helping members build skills and connections relevant to their careers."
        image={Analyze}
      />
    </div>
  );
};

export default Home;
