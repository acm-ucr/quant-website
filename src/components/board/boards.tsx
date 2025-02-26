import Board from "./board";
import Members from "@/data/Board";

const Boards = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:w-3/4 sm:gap-x-20">
      {Members.map((member, index) => {
        return (
          <div className="relative basis-2/5 sm:p-6 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
            <Board
              image={member.image}
              name={member.name}
              position={member.position}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
