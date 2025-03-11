import Header from "@/components/header";
import Projects from "@/components/project/projects";
// import Project from "@/components/project/project";
// import projects from "@/data/project";

const ProjectsPage = () => {
  return (
    <div className="bg-quant-navy flex min-h-screen w-screen flex-col flex-wrap items-center justify-center gap-8 p-12 pb-28">
      <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:p-20">
        <div className="lg:h-2 lg:w-2 lg:rotate-45 lg:bg-white"></div>
        <div className="lg:w-1/4 lg:border-2"> </div>
        <div className="items-center text-center font-hanken text-2xl font-bold text-white lg:w-3/12 lg:text-5xl">
          {" "}
          <Header>PROJECTS</Header>{" "}
        </div>
        <div className="w-[30%] border-2 lg:w-1/4"></div>
        <div className="lg:h-2 lg:w-2 lg:rotate-45 lg:bg-white"></div>
      </div>
      <Projects
      // image_src={project.image}
      // image_alt="Project Image"
      // name={project.name}
      // description={project.description}
      // {...Project}
      />
      {/* {projects.map((Project, i) => (
        <div key={i} className="p-5 lg:h-2/6 lg:max-w-[75%]">
          
        </div>
      ))} */}
    </div>
  );
};

export default ProjectsPage;
