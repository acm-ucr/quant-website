import techStack from "@/data/techstack";

const TechStack = () => {
  return (
    <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-10">
      <div className="font-hanken text-4xl font-bold text-white underline">
        Our Tech Stack
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center gap-20 pb-20">
        {techStack.map((tech, index) => (
          <a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tech.image} alt="Tech Logo" className="h-32 w-32" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
