import Header from "@/components/header";
import Projects from "@/components/project/projects";

const ProjectsPage = () => {
  return (
    <div className="flex h-[80vh] w-full flex-col items-center gap-8">
      <Header>PROJECTS</Header>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
