import React from "react";

const Quant = (props: { text1: string; text2: string }) => {
  return (
    <div className="bg-green-200 text-2xl">
      <p className="text-3xl">{props.text1}</p>
      <p className="text-5xl">{props.text2}</p>
    </div>
  );
};

export default Quant;
