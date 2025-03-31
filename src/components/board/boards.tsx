import Board from "./board";
import Members from "@/data/board";

const Boards = () => {
  return (
    <div className="grid w-3/4 grid-cols-2 gap-10 p-4 md:w-3/4 md:gap-6 xl:w-2/3">
      {Members.map(({ image, name, position }, index) => {
        return (
          <div key={index} className="flex items-center justify-center">
            <Board image={image} name={name} position={position} />
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
