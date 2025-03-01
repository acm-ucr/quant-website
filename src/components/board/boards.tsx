import Board from "./board";
import Members from "@/data/board";

const Boards = () => {
  return (
    <div className="mx-5 flex flex-wrap items-center justify-center gap-6 sm:gap-9 xl:w-3/4 xl:gap-10">
      {Members.map(({ image, name, position }, index) => {
        return (
          <div className="relative">
            <Board image={image} name={name} position={position} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
