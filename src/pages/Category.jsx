import React, { useEffect, useState } from "react";
import "../styles/topProduct.css";
import Modal from "../components/modal";
//css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ButtonIcon from "../components/buttonIcon";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  createCategory,
} from "../redux/productSlice/productSlice";
import { timeConvert } from "./../components/convertTime";

const Category = () => {
  const dispatch = useDispatch();

  //get data categories from store redux
  const { arrCategories } = useSelector((store) => store.products);

  const [showModal, setShowModal] = useState(false);
  const dataCreateCate = [
    {
      id: "categoryName",
      label: "Category Name",
      input: "",
    },
  ];

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleCreateCategory = (category) => {
    dispatch(createCategory(document.getElementById("categoryName").value));
  };

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
          {arrCategories?.map((category) => {
            //convert time from timestamp to time
            var timeCreate = timeConvert(category.create_date);
            var timeUpdate = timeConvert(category.update_date);
            return (
              <tr className="border-b-2" key={category.uuid}>
                <td>1</td>
                <td>{category.name}</td>
                <td>{category.quantity}</td>
                <td>{timeCreate}</td>
                <td>{timeUpdate}</td>
                <td className="border-none w-[8%]">
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <div className="ml-3 inline">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ButtonIcon
        color="dark"
        state="default"
        icon="add"
        position="bottom"
        handleEvent={() => setShowModal(true)}
      />
      <Modal
        isInvisible={showModal}
        onClose={() => setShowModal(false)}
        arrInput={dataCreateCate}
        onSubmit={handleCreateCategory}
      />
    </div>
  );
};

export default Category;
