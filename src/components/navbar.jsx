import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around p-5 border-b-2 border-primary-300 w-[100%] flex-1">
      <div className="align-middle w-[40%] flex justify-between">
        <a href="/" className="active:text-primary cursor-pointer text-[16px]">
          Dashboard
        </a>
        <a href="/Product" className="active:text-primary cursor-pointer">
          Product
        </a>
        <a href="/Customer" className="active:text-primary cursor-pointer">
          Customer
        </a>
        <a href="/Checkout" className="active:text-primary cursor-pointer">
          Checkout
        </a>
        <a href="/Report" className="active:text-primary cursor-pointer">
          Report
        </a>
      </div>
    </div>
  );
};

export default Navbar;