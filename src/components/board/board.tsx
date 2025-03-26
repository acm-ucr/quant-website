import Image, { StaticImageData } from "next/image";

type BoardProps = {
  image: StaticImageData;
  name: string;
  position: string;
};

const Board = ({ image, name, position }: BoardProps) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="flex w-full flex-col items-center md:w-3/4">
      <div className="relative z-10 w-full">
        <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border-2 border-quant-white" />
        <Image src={image} alt={`BoardMember: ${name}`} className="w-full" />
      </div>
      <div className="ml-4 mt-5 flex w-full flex-row justify-center gap-2 font-questrial text-lg text-quant-white sm:text-2xl">
        <span className="block sm:inline">{firstName}</span>{" "}
        <span className="block sm:inline">{lastName}</span>
      </div>
      <div className="ml-4 w-full text-center font-questrial text-base text-quant-blue-100 sm:text-xl">
        {position}
      </div>
    </div>
  );
};

export default Board;
