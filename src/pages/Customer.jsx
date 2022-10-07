import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faAdd } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";

const Customer = () => {
  const customers = [
    {
      id: 1,
      name: "Nguyen Van A",
      email: "abcd@gm.uit.edu.vn",
      orderQuantity: 200,
      startTime: "02-02-2022",
    },
    {
      id: 2,
      name: "Nguyen Van A",
      email: "abcd@gm.uit.edu.vn",
      orderQuantity: 200,
      startTime: "02-02-2022",
    },
  ];

  return (
    <div className="px-24 my-2">
      <table className="w-[100%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Email</th>
            <th>Order Quantity</th>
            <th>Start Time</th>
            <th></th>
          </tr>
          {customers?.map((customer) => (
            <tr className="border-b-2" key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.orderQuantity}</td>
              <td>{customer.startTime}</td>
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

export default Customer;
