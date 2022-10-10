import React, { useState } from "react";
import "../styles/topProduct.css";
import Modal from "../components/modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";

const Category = () => {
  const [showModal, setShowModal] = useState(false);

  const categories = [
    {
      id: 1,
      name: "Product Name",
      quantity: 200,
      createTime: "02-02-2022",
      updateTime: "02-02-2022",
    },
  ];

  return (
    <div className="px-24 my-2">
      <table className="w-[100%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>CreateTime</th>
            <th>Update Time</th>
            <th></th>
          </tr>
          {categories?.map((category) => (
            <tr className="border-b-2" key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.quantity}</td>
              <td>{category.createTime}</td>
              <td>{category.updateTime}</td>
              <td className="border-none w-[8%]">
                <FontAwesomeIcon icon={faPenToSquare} />
                <div className="ml-3 inline">
                  <FontAwesomeIcon icon={faTrashCan} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ButtonIcon
        color="dark"
        state="default"
        icon="add"
        position="bottom"
        handleEvent={() => setShowModal(true)}
      />
      <Modal isInvisible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default Category;
