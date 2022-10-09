import React, { useState } from "react";

const LabelInput = ({ name, value, className = "", halfWidth = "" }) => {
  // <Button Size="medium" State="default" Color="white">
  //   Sign up
  // </Button>
  const [inputValue, setInputValue] = useState(value);
  return (
    <div className={`w-[100%] my-4 ${halfWidth}`}>
      <label className="text-[20px] font-[400]">{name}</label>
      <div className="w-[100%] flex mt-2">
        <input
          type="text"
          className={`w-[100%] bg-[rgba(255,255,255,0.15)] grow-[1] pl-5 border-spacing-2 border-2 flex py-2 w-374 border-primary ${className}`}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
      </div>
    </div>
  );
};

export default LabelInput;
