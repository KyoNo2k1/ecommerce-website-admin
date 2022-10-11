import React, { useEffect } from "react";
import { timeConvert } from "../components/convertTime";
import { getOneCategory } from "./../services/category/show";

//css
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/productSlice/productSlice";

const ProductList = ({ product }) => {
  const dispatch = useDispatch();
  const { categoryName } = useSelector((store) => store.products);
  console.log(categoryName);
  useEffect(() => {
    dispatch(getCategory(product.category));
  }, []);
  return (
    <tr className="border-b-2">
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>1</td>
      <td>{categoryName.data.name}</td>
      <td>1</td>
      <td className="border-none w-[8%]">
        <FontAwesomeIcon icon={faPenToSquare} />
        <div className="ml-3 inline">
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </td>
    </tr>
  );
};

export default ProductList;
