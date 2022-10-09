import React from "react";
import Counter from "./counter";

const CheckoutListDetail = ({ checkoutItems }) => {
  return checkoutItems.map(({ id, name, detail, price }) => (
    <div key={id} className="flex py-4 laptop:w-[100%] laptop:justify-between">
      {/*Product Cart Item */}
      <div className="laptop:w-[45%] flex">
        <div className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] ">
          {/*Image product */}
          {/* <img
            src={imgUrl}
            alt={name}
            className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] max-w-none"
          /> */}
        </div>
        {/*Name , detail, price product */}
        <div className="ml-5 laptop:ml-3 p-1 flex flex-col laptop:w-[100%] laptop:flex-row">
          <div className="flex-1">
            <p className="text-[16px] laptop:text-[20px]">{name}</p>
            <p className="text-[14px] py-2">{detail}</p>
            <p className="text-[16px]">${price}</p>
          </div>
          {/* counter */}
          <div className="w-fit laptop:hidden">
            <Counter />
          </div>
        </div>
      </div>
      <div className="hidden laptop:flex items-center">
        {/* counter */}
        <Counter />
      </div>
      <div className="hidden laptop:flex items-center">
        <p>$ {price}</p>
      </div>
    </div>
  ));
};

export default CheckoutListDetail;
