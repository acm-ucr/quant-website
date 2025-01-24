import Image from "next/image";
import Chart from "@/public/assets/chartimage.webp";

interface DescriptionProps {
  title: string;
  description: string;
}

const Description = ({ title, description }: DescriptionProps) => {
  return (
    <div className="relative mx-10 flex h-fit max-w-7xl flex-col">
      <div className="mb-10 px-10 font-hanken text-5xl font-bold text-white">
        {title}
      </div>
      <div className="max-h-64 w-fit overflow-auto pl-10 pr-10 font-roboto text-lg text-white">
        {description}
      </div>
      <div className="flex w-full flex-row justify-end">
        <Image
          src={Chart}
          alt="description-image"
          className="h-full max-h-28 w-full max-w-28 object-cover"
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
