import Board from "./board";
import Members from "@/data/Board";

const Boards = () => {
  return (
    <div className="mx-5 flex flex-wrap items-center justify-center gap-6 sm:gap-x-9 xl:gap-x-10">
      {Members.map((member, index) => {
        return (
          <div className="relative">
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
