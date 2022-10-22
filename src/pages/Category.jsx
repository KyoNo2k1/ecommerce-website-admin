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
  updateCategory,
} from "../redux/productSlice/productSlice";
import { timeConvert } from "./../components/convertTime";
import { deleteCategory } from "./../redux/productSlice/productSlice";

const Category = () => {
  const dispatch = useDispatch();
  //get data categories from store redux
  const { arrCategories } = useSelector((store) => store.products);
  //modal update category
  const [modalUpdate, setModalUpdate] = useState(false);
  // value id,newname of category name change
  const [categoryId, setCategoryId] = useState("");
  const [getNewName, setGetNewName] = useState("");
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

  const handleCreateCategory = async () => {
    await dispatch(
      createCategory(document.getElementById("categoryName").value)
    );
    setShowModal(false);
  };

  const handleUpdate = () => {
    dispatch(
      updateCategory({
        id: categoryId,
        name: getNewName,
      })
    );
    setModalUpdate(false);
  };

  const handleDelete = async (id) => {
    let text = "You want to delete this category?";
    if (window.confirm(text) === true) {
      dispatch(deleteCategory(id));
    }
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
            var timeCreate = timeConvert(category.create_date.toDate());
            var timeUpdate = timeConvert(category.update_date.toDate());
            return (
              <tr className="border-b-2" key={category.uuid}>
                <td>1</td>
                <td>{category.name}</td>
                <td>{category.quantity}</td>
                <td>{timeCreate}</td>
                <td>{timeUpdate}</td>
                <td className="border-none flex">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setModalUpdate(true);
                      setCategoryId(category.uuid);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                  <div
                    className="ml-3 cursor-pointer"
                    onClick={() => handleDelete(category.uuid)}
                  >
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
        handleClose={() => setShowModal(false)}
        isInvisible={showModal}
        onClose={() => setShowModal(false)}
        arrInput={dataCreateCate}
        onSubmit={handleCreateCategory}
      />
      {modalUpdate ? (
        <Modal
          handleClose={() => setModalUpdate(false)}
          isInvisible={modalUpdate}
          onClose={() => setShowModal(false)}
          arrInput={dataCreateCate}
          onSubmit={handleUpdate}
          update={true}
          getNewName={getNewName}
          setGetNewName={setGetNewName}
        />
      ) : null}
    </div>
  );
};

export default Category;
