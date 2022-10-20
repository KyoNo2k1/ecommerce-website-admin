import React from "react";

//css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { timeConvert } from "./convertTime";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/productSlice/productSlice";
import { useNavigate } from "react-router-dom";
import { deleteObject, ref } from "firebase/storage";
import { storage } from "../services/firebase.config";

const ProductList = ({ product, stt }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var timeCreate = timeConvert(product?.create_date?.seconds);

  const handleUpdate = () => {
    navigate(`/Product/Update/${product.uuid}`, { state: product });
  };
  const handleDelete = async (id) => {
    let text = "You want to delete this product?";
    if (window.confirm(text) === true) {
      for (let i = 0; i < 4; i++) {
        const oldProductImgRef = ref(storage, `products/${id}/${i}`);
        if (oldProductImgRef) deleteObject(oldProductImgRef);
      }
      await dispatch(deleteProduct(id));
      navigate("/Product");
    }
  };
  return (
    <tr className="border-b-2">
      <td>{stt}</td>
      <td>{product.name}</td>
      <td>{product.price} USD</td>
      <td>{product.quantity}</td>
      <td>{product.category}</td>
      <td>{timeCreate}</td>
      <td className="border-none flex">
        <div className="cursor-pointer" onClick={() => handleUpdate()}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
        <div
          className="ml-3 cursor-pointer"
          onClick={() => handleDelete(product.uuid)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </td>
    </tr>
  );
};

export default ProductList;
