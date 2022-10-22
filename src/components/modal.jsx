import React, { useState } from "react";
import Button from "./button";
import ButtonIcon from "./buttonIcon";
import LabelInput from "./labelInput";

const Modal = ({
  isInvisible,
  onClose,
  arrInput,
  onSubmit,
  update,
  handleClose,
  getNewName,
  setGetNewName,
}) => {
  if (!isInvisible) return false;
  //data form input to submit

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] bg-white rounded px-16 pt-14 pb-10 pointer-events-auto">
        {arrInput?.map((data) => {
          return (
            <React.Fragment key={data.id}>
              <LabelInput
                name={data.label}
                value={data.input || getNewName}
                id={data.id}
                setGetNewName={setGetNewName}
              />
            </React.Fragment>
          );
        })}
        <div className="float-right mt-10 flex">
          <ButtonIcon
            position="custom"
            color="light"
            icon="back"
            customPos="mr-8"
            handleEvent={handleClose}
          ></ButtonIcon>

          {update ? (
            <Button Color="primary" onSubmit={onSubmit}>
              Update
            </Button>
          ) : (
            <Button Color="primary" onSubmit={onSubmit}>
              Add New
            </Button>
          )}
        </div>
      </div>
      <button>close</button>
    </div>
  );
};

export default Modal;
