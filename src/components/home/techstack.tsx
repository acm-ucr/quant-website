import techStack from "@/data/techstack";
import Image from "next/image";
import Link from "next/link";

const TechStack = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      {/* Title */}
      <div className="font-hanken text-4xl font-bold text-white underline">
        Our Tech Stack
      </div>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap items-center justify-center gap-16 pb-10 ">
        {techStack.map((tech, index) => (
          <Link
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Wrapper with Width & Aspect Ratio */}
            <div className="relative aspect-square w-[8vw]">
              <Image
                src={tech.image}
                alt={`Tech Logo`}
                fill
                className="object-contain transition-transform duration-300 hover:scale-125"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
