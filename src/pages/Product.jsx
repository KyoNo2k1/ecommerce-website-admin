import React, { useEffect } from "react";
import "../styles/topProduct.css";
import { useNavigate } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  resetStatusProduct,
} from "../redux/productSlice/productSlice";
import ButtonIcon from "../components/buttonIcon";

//setting
import { getCategories } from "./../redux/productSlice/productSlice";
import ProductList from "./../components/productList";
import { toast } from "react-toastify";

const Product = () => {
  //get data product from store redux
  const { arrProducts, statusCreateProduct, statusUpdateProduct } = useSelector(
    (store) => store.products
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get data firsttime
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    if (statusCreateProduct === "success") toast("Create product success!");

    if (statusUpdateProduct === "success") toast("Update product success!");
    if (
      statusCreateProduct === "success" ||
      statusUpdateProduct === "success"
    ) {
      dispatch(resetStatusProduct());
    }
  }, [statusUpdateProduct, statusCreateProduct]);
  const handleAddProduct = () => {
    navigate("/Product/Add");
  };

  return (
    <div className="px-24 my-2">
      <table className="w-[100%]">
        <tbody>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Remain Quantity</th>
            <th>Category</th>
            <th>Import Time</th>
            <th></th>
          </tr>
          {arrProducts?.map((product, index) => {
            //convert time from timestamp to time
            return (
              <ProductList key={product.name} product={product} stt={index} />
            );
          })}
        </tbody>
      </table>
      <ButtonIcon
        position="bottom"
        handleEvent={() => handleAddProduct(true)}
      />
    </div>
  );
};

export default Product;
