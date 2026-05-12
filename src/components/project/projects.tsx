"use client"; // <-- Add this if you are using Next.js App Router!

import Project from "@/components/project/project";
import { useQuery } from "@tanstack/react-query";

const Projects = () => {
  // Use object destructuring. We alias 'data' to 'projects'.
  // We also pull in 'isPending' (preferred in Tanstack v5) and 'error'
  const {
    data: projects,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["projectData"],
    retry: 0, // <-- Turn OFF retries temporarily so errors show up instantly
    queryFn: async () => {
      console.log("1. Fetching data...");
      const response = await fetch(`${process.env.NEXT_PUBLIC_PROJECT_API}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("2. Parsing JSON...");
      const json = await response.json();

      console.log("3. Data received from API:", json);

      // IF YOUR API RETURNS AN OBJECT (e.g., { projects: [...] }),
      // YOU MUST RETURN THE ARRAY HERE. Example: return json.projects;
      return json;
    },
  });

  if (isPending)
    return <div className="mt-10 text-center">Loading projects...</div>;

  if (isError)
    return (
      <div className="mt-10 text-center text-red-500">
        Error: {error?.message}
      </div>
    );

  // Fallback in case projects is null/undefined to prevent .map from crashing
  const projectList = Array.isArray(projects) ? projects : [];

  return (
    <div className="mb-12 flex w-full flex-col flex-wrap items-center justify-center gap-8">
      {projectList.length === 0 && <p>No projects found.</p>}

      {projectList.map(({ image, name, description, link }, i) => (
        <div key={i} className="flex w-5/6 items-center justify-center">
          <Project
            image_src={image}
            image_alt={name || "Project Image"}
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
