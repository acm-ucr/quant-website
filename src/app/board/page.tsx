import Header from "../../components/header";
import Boards from "@/components/board/boards";

const Board = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Header title="OUR BOARD" />
      <Boards />
    </div>
  );
};

export default Board;
