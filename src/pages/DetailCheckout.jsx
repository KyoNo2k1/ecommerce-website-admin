import React from "react";
import CheckoutListDetail from "../components/checkoutListDetail";
import Button from "../components/button";

const DetailCheckout = () => {
  const checkoutList = [
    {
      id: 1,
      name: "Graystone vase",
      detail: "A time less ceramic vase with a tru color grey glaze.",
      price: 85,
    },
    {
      id: 2,
      name: "Basic white vase",
      detail: "Beautiful and simple this is one for the classics.",
      price: 125,
    },
  ];

  return (
    <div className="px-24">
      <p className="text-[24px]">#023</p>
      <div className="flex">
        <div className="w-[70%]">
          <div className="border-b-2 border-primary-300">
            <div className="flex py-3 justify-between border-b-2 border-primary-300">
              <p className="w-[45%]">Product</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {/*Product Cart List*/}
            <CheckoutListDetail checkoutItems={checkoutList} />
          </div>
          <div className="flex flex-row-reverse my-4">
            <p className="text-[20px] text-primary">
              Subtotal &emsp; <span className="text-[24px]">$210</span>
            </p>
          </div>
        </div>
        <div className="w-[10%]"></div>
        <div className="w-[20%] relative">
          <p>Customer Information</p>
          <div className="flex justify-between mt-4">
            <div className="">
              <p>Name</p>
              <p>Nguyen Van A</p>
            </div>
            <div className="">
              <p>Phone</p>
              <p>094768673</p>
            </div>
          </div>
          <div className="mt-3">
            <p>Address</p>
            <p>Ho Chi Minh, Viet Nam</p>
          </div>

          <br />
          <Button Color="primary">View Detail</Button>

          <div className="absolute bottom-0 right-0 flex">
            <div className="">
              <Button Color="secondary">Back</Button>
            </div>
            <div className="flex-col">
              <Button Color="primary">Confirm</Button>
              <Button Color="secondary">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCheckout;
