import techStack from "@/data/techstack";
import Image from "next/image";
import Link from "next/link";

const TechStack = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-4">
      {/* Title */}
      <div className="font-hanken text-3xl font-bold text-white underline sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl">
        Our Tech Stack
      </div>

      {/* Tech Stack Icons */}
      <div className="flex flex-wrap justify-center gap-6 pb-10 sm:gap-10 md:gap-12 lg:gap-16">
        {techStack.map((tech, index) => (
          <Link
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Responsive Wrapper for Icons */}
            <div className="relative aspect-square w-[22vw] max-w-[120px] basis-1/2 sm:w-[18vw] sm:basis-1/3 md:w-[14vw] md:basis-1/4 lg:w-[12vw] lg:basis-1/5 xl:w-[10vw] xl:basis-1/5 2xl:w-[8vw]">
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
