import Header from "@/components/header";
import Projects from "@/components/project/projects";

const ProjectsPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <Header title="PROJECTS" />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
