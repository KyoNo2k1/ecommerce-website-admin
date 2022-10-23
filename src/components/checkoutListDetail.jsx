import React from "react";
import Counter from "./counter";

const CheckoutListDetail = ({ transaction }) => {
  return transaction?.products?.map(({ number, cartItem }) => {
    return (
      <div
        key={cartItem?.uuid}
        className="flex py-4 laptop:w-[100%] laptop:justify-between"
      >
        {/*Product Cart Item */}
        <div className="laptop:w-[45%] flex">
          <div className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] ">
            {/*Image product */}
            <img
              src={cartItem.arrImg[0]}
              alt={cartItem.name}
              className="w-[134px] laptop:w-[110px] h-[166px] laptop:h-[134px] max-w-none"
            />
          </div>
          {/*Name , detail, price product */}
          <div className="ml-5 laptop:ml-3 p-1 flex flex-col laptop:w-[100%] laptop:flex-row">
            <div className="flex-1">
              <p className="text-[16px] laptop:text-[20px]">{cartItem.name}</p>
              <p className="text-[14px] py-2">{cartItem.description}</p>
              <p className="text-[16px]">${cartItem.price}</p>
            </div>
          </div>
        </div>
        <div className="hidden laptop:flex items-center">
          {/* counter */}
          <Counter number={number} />
        </div>
        <div className="hidden laptop:flex items-center">
          <p>$ {(Number(cartItem.price) * Number(number)).toFixed(1)}</p>
        </div>
      </div>
    );
  });
};

export default CheckoutListDetail;
