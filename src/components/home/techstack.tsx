import techStack from "@/data/techstack";
import Image from "next/image";
import Link from "next/link";

const TechStack = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-4">
      {/* Title */}
      <div className="text-[clamp(1.5rem, 4vw, 2.5rem)] font-hanken text-3xl font-bold text-white underline">
        Our Tech Stack
      </div>

      {/* Tech Stack Icons */}
      <div className="flex max-w-[85%] flex-wrap justify-center gap-6 pb-10 sm:gap-10 md:gap-12 lg:gap-16">
        {techStack.map((tech, index) => (
          <Link
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Adjusted Wrapper for Better Row Balancing */}
            <div className="relative aspect-square w-[13vw] basis-1/2 sm:w-[11vw] sm:basis-1/3 md:w-[10vw] md:basis-1/4 lg:w-[9vw] lg:basis-1/5 xl:w-[8vw] xl:basis-1/5 2xl:w-[7vw]">
              <Image
                src={tech.image}
                alt={`Tech Logo`}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
