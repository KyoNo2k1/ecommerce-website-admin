import React from "react";
import LabelInput from "../components/labelInput";
import ProductImage from "../images/productImage.png";

const RUDProduct = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[86%] mx-auto flex">
        {/*image */}
        <div>
          <img
            src={ProductImage}
            alt="ProductImage"
            width={305}
            height={332}
            className="pt-px-32px"
          />
        </div>
        {/*product name, supplier, des */}
        <div>
          <LabelInput />
        </div>
      </div>
    </div>
  );
};

export default RUDProduct;
