import React from "react";
import Button from "./button";

const LabelInput = () => {
  // <Button Size="medium" State="default" Color="white">
  //   Sign up
  // </Button>
  return (
    <div className="w-[100%]">
      <label className="text-[20px] font-[400]">Product name</label>
      <div className="w-full flex">
        <input
          placeholder="Chair"
          className={`bg-[rgba(255,255,255,0.15)] grow-[1] pl-8 border-spacing-2 border-2 flex py-2 w-374 `}
        />
      </div>
    </div>
  );
};

export default LabelInput;
