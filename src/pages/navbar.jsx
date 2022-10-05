import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around p-5 border-b-2 border-primary-300 w-[100%] flex-1">
      <div className="align-middle w-[40%] flex justify-between">
        <button className="active:text-primary cursor-pointer text-[16px]">
          Dashboard
        </button>
        <button className="active:text-primary cursor-pointer">Product</button>
        <button className="active:text-primary cursor-pointer">Customer</button>
        <button className="active:text-primary cursor-pointer">Checkout</button>
        <button className="active:text-primary cursor-pointer">Report</button>
      </div>
    </div>
  );
};

export default Navbar;
