import Image from "next/image";
import image_src from "@/public/projects/exampleACM.svg";
const Project = (props: {
  image_alt: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="min-h-fit w-96 rounded-lg text-sm max-lg:border-[1px] max-lg:border-[#ADC0EB] max-lg:bg-[#CAE7FF69] lg:flex lg:h-2/6 lg:w-9/12 lg:flex-col lg:text-lg">
      <div className="flex flex-col items-center justify-center p-4 text-white lg:flex-row lg:items-center lg:justify-center lg:gap-24 lg:p-8 lg:text-white">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#94C7ED] lg:flex lg:min-h-44 lg:min-w-44 lg:items-center lg:justify-center lg:rounded-full">
          <Image
            className="w-24 max-lg:w-10"
            src={image_src}
            alt={props.image_alt}
          />
        </div>
        <div className="flex flex-col justify-center max-lg:items-center">
          <div className="p-3 font-questrial text-lg font-bold lg:text-4xl lg:font-bold">
            {props.name}
          </div>
          <div className="font-roboto text-sm lg:max-w-5xl lg:p-3 lg:font-roboto lg:text-lg">
            {props.description}
          </div>
        </div>
      </div>
      <div className="lg:w-7/8 lg:border-2"></div>
    </div>
  );
};

export default Project;
