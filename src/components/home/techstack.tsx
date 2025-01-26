import techStack from "@/data/techstack";
import Image from "next/image";
import Link from "next/link";

const TechStack = () => {
  return (
    <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-10">
      {/* Title */}
      <div className="font-hanken text-4xl font-bold text-white underline">
        Our Tech Stack
      </div>

      {/* Tech Stack Icons */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-10 pb-20">
        {techStack.map((tech, index) => (
          <Link
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[10%] w-[10%] p-[1%]"
          >
            <Image
              src={tech.image}
              alt={`Tech Logo`}
              width={400}
              height={400}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
