import React from "react";
import Button from "./button";
import ButtonIcon from "./buttonIcon";
import LabelInput from "./labelInput";

function Modal({ isInvisible, onClose }) {
  if (!isInvisible) return false;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] bg-white rounded px-16 pt-14 pb-10 pointer-events-auto">
        <LabelInput name={"Category name"} value={"Name category"} />
        <div className="float-right mt-10 flex">
          <ButtonIcon
            position="custom"
            color="light"
            icon="back"
            customPos="mr-8"
            handleEvent={() => onClose()}
          ></ButtonIcon>
          <Button Color="primary">Add new/ Update</Button>
        </div>
      </div>
      <button>close</button>
    </div>
  );
}

export default Modal;
