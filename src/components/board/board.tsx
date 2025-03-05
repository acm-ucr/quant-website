import Image, { StaticImageData } from "next/image";

type BoardProps = {
  image: StaticImageData;
  name: string;
  position: string;
};
const Board = ({ image, name, position }: BoardProps) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex -translate-x-1 items-center justify-center sm:-translate-x-0">
        <Image
          src={image}
          alt={`BoardMember: ${name}`}
          className="mr-1 w-1/2 sm:ml-3 sm:mr-2 sm:w-5/6 sm:pr-5"
        />
        <div className="absolute left-[30%] top-[9%] -z-10 h-full w-1/2 border-4 border-quant-white sm:left-[14%] sm:top-[7%] sm:w-3/4 sm:border-2"></div>
      </div>
      <div className="-mb-2 pt-4 text-center font-questrial text-lg text-quant-white sm:mb-0 sm:text-2xl">
        <span className="block sm:inline">{firstName}</span>
        <span className="block sm:inline">{lastName}</span>
      </div>
      <div className="text-center font-questrial text-base text-quant-blue-100 sm:text-xl">
        {position}
      </div>
    </div>
  );
};

export default Board;
