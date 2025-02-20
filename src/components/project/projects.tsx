import Project from "@/components/project/project";
import projects from "@/data/project";

const Projects = () => {
  return (
    <div className="mb-12 flex w-full flex-col flex-wrap items-center justify-center gap-8">
      {projects.map((project, i) => (
        <div key={i} className="flex w-5/6 items-center justify-center">
          <Project
            image_src={project.image}
            image_alt="Project Image"
            name={project.name}
            description={project.description}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
