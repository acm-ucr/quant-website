type ExampleProps = {
  text1: string;
  text2: string;
  text3: string;
};

const Example = ({ text1, text2, text3 }: ExampleProps) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-10 rounded-lg bg-red-200 p-10 text-xl">
      <div className="w-1/2 bg-blue-200 p-5 text-center">{text1}</div>
      <div className="flex w-1/2 flex-row gap-5">
        <div className="w-full rounded-full bg-blue-400 p-5 text-center">
          {text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center">
          {text2}
        </div>
      </div>
      <div className="w-1/2 bg-blue-600 p-5 text-center text-white">
        {text3}
      </div>
    </div>
  );
};

export default Example;
