import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  if (!!user.email)
    return (
      <div className="flex justify-around p-5 border-b-2 border-primary-300 w-[100%] flex-1">
        <div className="align-middle w-[50%] flex justify-between">
          <Link
            to="/"
            className="active:text-primary cursor-pointer text-[16px]"
          >
            Dashboard
          </Link>
          <Link to="/Product" className="active:text-primary cursor-pointer">
            Product
          </Link>
          <Link to="/Category" className="active:text-primary cursor-pointer">
            Category
          </Link>
          <Link to="/Customer" className="active:text-primary cursor-pointer">
            Customer
          </Link>
          <Link
            to="/Transactions"
            className="active:text-primary cursor-pointer"
          >
            Transactions
          </Link>
          <Link to="/Report" className="active:text-primary cursor-pointer">
            Report
          </Link>
          <Link to="/Comment" className="active:text-primary cursor-pointer">
            Comment
          </Link>
        </div>
      </div>
    );
  else return null;
};

export default Navbar;
