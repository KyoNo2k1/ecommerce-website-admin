import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";

const Checkout = () => {
  const checkouts = [
    {
      id: 1,
      checkoutID: "#012",
      customerEmail: "abcd@gm.uit.edu.vn",
      price: 20.0,
      status: "Waiting",
      checkoutTime: "02-10-2022",
    },
    {
      id: 2,
      checkoutID: "#022",
      customerEmail: "abcd@gm.uit.edu.vn",
      price: 20.0,
      status: "Waiting",
      checkoutTime: "02-10-2022",
    },
  ];

  return (
    <div className="px-24 my-2">
      <table className="w-[100%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Customer</th>
            <th>Price</th>
            <th>Status</th>
            <th>Checkout Time</th>
            <th></th>
          </tr>
          {checkouts?.map((checkout) => (
            <tr className="border-b-2" key={checkout.id}>
              <td>{checkout.id}</td>
              <td>{checkout.checkoutID}</td>
              <td>{checkout.customerEmail}</td>
              <td>{checkout.price}</td>
              <td>{checkout.status}</td>
              <td>{checkout.checkoutTime}</td>
              <td className="border-none">
                <FontAwesomeIcon icon={faPenToSquare} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonIcon />
    </div>
  );
};

export default Checkout;
