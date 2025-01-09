import React from "react";

const Quant = (props: { text1: string; text2: string }) => {
  return (
    <div className="bg-green-200">
      <p className="text-6xl">{props.text1}</p>
      <hr />
      {props.text2}
    </div>
  );
};

export default Quant;
