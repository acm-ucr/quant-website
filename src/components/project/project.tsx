import Image from "next/image";
import image_src from "@/public/projects/exampleACM.svg";
const Project = (props: {
  image_alt: string;
  name: string;
  description: string;
}) => {
  return (
    <div className="flex h-2/6 w-8/12 flex-col text-lg">
      <div className="flex flex-row items-center justify-center gap-24 p-8 text-white">
        <div className="flex h-1/2 w-1/6 items-center justify-center rounded-full bg-[#94C7ED]">
          <Image className="h-20 w-20" src={image_src} alt={props.image_alt} />
        </div>
        <div className="flex flex-col">
          <div className="p-3 font-questrial text-4xl font-bold">
            {props.name}
          </div>
          <div className="max-w-5xl p-3 font-roboto text-lg">
            {props.description}
          </div>
        </div>
      </div>
      <div className="w-7/8 border-2"></div>
    </div>
  );
};

export default Project;
