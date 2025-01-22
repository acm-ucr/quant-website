const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 flex-col items-center gap-4 rounded-lg bg-red-200 p-10">
      <div className="w-1/2 bg-blue-100 p-5 text-center text-lg">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-4">
        <div className="w-full rounded-full bg-blue-400 p-5 text-center text-lg">
          {props.text2}
        </div>
        <div className="w-full rounded-full bg-blue-400 p-5 text-center text-lg">
          {props.text2}
        </div>
      </div>
      <div className="w-1/2 bg-blue-500 p-5 text-center text-lg text-white">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;
