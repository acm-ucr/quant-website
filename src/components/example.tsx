import React from "react";

const Quant = (props:{text1:string, text2:string}) => {
  return <div>
    <p className="bg-green-200 text-5xl">{props.text1}</p>
    <p className="bg-green-200 text-5xl">{props.text2}</p>
  </div>
};

export default Quant;
