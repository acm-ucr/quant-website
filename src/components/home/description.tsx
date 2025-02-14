import Image from "next/image";
import { StaticImageData } from "next/image";

interface DescriptionProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const Description = ({ title, description, image }: DescriptionProps) => {
  return (
    <div className="relative mx-10 mb-10 flex h-fit max-w-7xl flex-col px-5 sm:px-10 md:px-20">
      <div className="mb-5 pr-10 text-center font-hanken text-4xl font-bold text-white md:mb-10 md:text-left md:text-4xl">
        {title}
      </div>
      <div className="mb-10 w-fit overflow-auto text-center font-roboto text-lg text-white md:mb-0 md:pr-12 md:text-left">
        {description}
      </div>
      <div className="flex w-full flex-row justify-end">
        <Image
          src={image}
          alt="description-image"
          className="hidden h-full max-h-28 w-full max-w-28 object-cover md:block"
        />
      </div>
      <div
        className="left-18 absolute bottom-4 hidden h-0.5 bg-white md:block"
        style={{
          width: "calc(100% - 280px)",
        }}
      ></div>
      <div
        className="absolute right-24 top-0 hidden w-0.5 bg-white md:block"
        style={{
          height: "calc(100% - 120px)",
        }}
      ></div>
    </div>
  );
};

export default Description;
