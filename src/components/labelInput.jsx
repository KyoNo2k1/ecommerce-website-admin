import React from "react";

const LabelInput = ({
  name,
  value,
  id,
  className = "",
  halfWidth = "",
  textArea = false,
  inputValue,
  setInputValue,
  setNewNameCategory,
}) => {
  const handleSetInput = (e) => {
    switch (name) {
      case "Product name":
        setInputValue({ ...inputValue, name: e.target.value });
        break;
      case "Dimension ( width x height x lengtht)":
        setInputValue({
          ...inputValue,
          dimension: e.target.value,
        });
        break;
      case "Description":
        setInputValue({ ...inputValue, description: e.target.value });
        break;
      case "Price":
        setInputValue({ ...inputValue, price: e.target.value });
        break;
      case "Quantity":
        setInputValue({ ...inputValue, quantity: e.target.value });
        break;
      case "Remain":
        setInputValue({ ...inputValue, remain: e.target.value });
        break;
      case "Category Name":
        setNewNameCategory(e.target.value);
        break;
      default:
    }
  };
  return (
    <div className={`w-[100%] my-4 ${halfWidth}`}>
      <label className="text-[20px] font-[400]">{name}</label>
      <div className="w-[100%] flex mt-2">
        {!textArea ? (
          <input
            type="text"
            className={`w-[100%] bg-[rgba(255,255,255,0.15)] grow-[1] pl-5 border-spacing-2 border-2 flex py-2 w-374 border-primary ${className}`}
            onChange={(e) => {
              handleSetInput(e);
            }}
            id={id}
            value={value}
          />
        ) : (
          <textarea
            cols={10}
            rows={5}
            className="w-[100%] border-2 border-primary"
            onChange={(e) => {
              handleSetInput(e);
            }}
            value={value}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default LabelInput;
