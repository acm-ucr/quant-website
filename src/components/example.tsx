const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="flex w-2/3 items-center justify-center gap-1 rounded-lg bg-red-200 p-10 text-lg">
      <div className="flex w-1/2 flex-col gap-8">
        <div className="w-full bg-blue-200 p-5 text-center">{props.text1}</div>
        <div className="flex flex-row gap-4">
          <div className="w-full rounded-full bg-blue-400 p-5 text-center">
            {props.text2}
          </div>
          <div className="w-full rounded-full bg-blue-400 p-5 text-center">
            {props.text2}
          </div>
        </div>
        <div className="w-full bg-blue-600 p-5 text-center text-white">
          {props.text3}
        </div>
      </div>
    </div>
  );
};

export default Example;
