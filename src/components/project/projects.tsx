import Project from "@/components/project/project";
import projects from "@/data/project";

const Projects = () => {
  return (
    <div className="mb-12 flex w-full flex-col flex-wrap items-center justify-center gap-8">
      {projects.map(({ image, name, description, link }, i) => (
        <div key={i} className="flex w-5/6 items-center justify-center">
          <Project
            image_src={image}
            image_alt="Project Image"
            name={name}
            description={description}
            link={link}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
