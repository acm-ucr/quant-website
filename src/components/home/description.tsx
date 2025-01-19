import Image from "next/image";
import React from "react";

interface DescriptionProps {
  title: string;
  description: string;
  image: string;
}

const Description = ({ title, description, image }: DescriptionProps) => {
  return (
    <div className="relative mx-10 flex max-w-7xl flex-col">
      <div className="mb-10 px-10 font-hanken text-5xl font-bold text-white">
        {title}
      </div>
      <div className="max-h-64 w-fit overflow-auto pl-10 pr-10 font-roboto text-lg text-white">
        {description}
      </div>
      <div className="relative m-0 flex justify-end p-0">
        <Image
          className=""
          src={image}
          width={120}
          height={120}
          alt="description-image"
        />
      </div>
      <div
        className="absolute bottom-4 left-0 h-0.5 bg-white"
        style={{
          width: "calc(100% - 120px)",
        }}
      ></div>
      <div
        className="absolute right-4 top-0 w-0.5 bg-white"
        style={{
          height: "calc(100% - 120px)",
        }}
      ></div>
    </div>
  );
};

export default Description;
