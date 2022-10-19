import React from "react";

const Navbar = ({ user }) => {
  if (user)
    return (
      <div className="flex justify-around p-5 border-b-2 border-primary-300 w-[100%] flex-1">
        <div className="align-middle w-[40%] flex justify-between">
          <a
            href="/"
            className="active:text-primary cursor-pointer text-[16px]"
          >
            Dashboard
          </a>
          <a href="/Product" className="active:text-primary cursor-pointer">
            Product
          </a>
          <a href="/Category" className="active:text-primary cursor-pointer">
            Category
          </a>
          <a href="/Customer" className="active:text-primary cursor-pointer">
            Customer
          </a>
          <a
            href="/Transactions"
            className="active:text-primary cursor-pointer"
          >
            Transactions
          </a>
          <a href="/Report" className="active:text-primary cursor-pointer">
            Report
          </a>
        </div>
      </div>
    );
  else return null;
};

export default Navbar;
