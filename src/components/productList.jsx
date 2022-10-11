import React, { useEffect } from "react";
import { timeConvert } from "../components/convertTime";
import { getOneCategory } from "./../services/category/show";

//css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategory } from "../redux/productSlice/productSlice";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  const { categoryName } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(getCategory(product.category));
  }, []);

  // hong duoc
  const navigate = useNavigate();

  const openDetail = () => {
    navigate("Product/:" + product.id);
  };

  return (
    <tr className="border-b-2">
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{categoryName?.data?.name}</td>
      <td>1</td>
      <td className="border-none w-[8%]">
        <FontAwesomeIcon icon={faPenToSquare} onclick={() => openDetail()} />
        <div className="ml-3 inline">
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </td>
    </tr>
  );
};

export default ProductList;
