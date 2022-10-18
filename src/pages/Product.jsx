import React, { useEffect } from "react";
import "../styles/topProduct.css";
import { useNavigate } from "react-router-dom";
import LabelInput from "../components/labelInput";

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
  const {
    arrProducts,
    arrCategories,
    statusCreateProduct,
    statusUpdateProduct,
    statusDeleteProduct,
  } = useSelector((store) => store.products);

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

    if (statusDeleteProduct === "success") toast("Delete product success!");

    if (
      statusCreateProduct === "success" ||
      statusUpdateProduct === "success" ||
      statusDeleteProduct === "success"
    ) {
      dispatch(resetStatusProduct());
    }
  }, [statusUpdateProduct, statusCreateProduct, statusDeleteProduct]);
  const handleAddProduct = () => {
    navigate("/Product/Add");
  };

  /* List of filter data */
  const filter = {
    // category: [
    //   "All",
    //   "Plan Pots",
    //   "Ceramics",
    //   "Tables",
    //   "Chairs",
    //   "Crockery",
    //   "Tableware",
    //   "Cutlery",
    // ],
    price: ["All", "0 - 50", "51 - 100", ">100"],
    remain: ["All", "0 - 20", "21 - 50", "51 - 100", ">100"],
  };

  return (
    <div className="px-24 my-2">
      <div className="flex justify-between font-clash mb-3">
        <p className="text-h6 font-bold">{`Total - ${arrProducts.length}`}</p>
        <div className="flex">
          {/* Search by name */}
          <div className="mr-3 flex flex-col">
            <label className="text-h6 mr-2">Search by name</label>
            <input
              value=""
              className="w-[100%] h-[44px] border-primary border-2 px-4"
              placeholder="All"
            />
          </div>
          {/* choose remain quantity type */}
          <div className="mr-3 flex flex-col">
            <label className="text-h6 mr-2">Price Level</label>
            <select className="w-[150px] h-[44px] border-primary border-2 px-4">
              <option value="" disabled hidden>
                Select your option
              </option>
              {filter.remain?.map((item) => {
                return <option value="">{item}</option>;
              })}
            </select>
          </div>
          {/* choose price type */}
          <div className="mr-3 flex flex-col">
            <label className="text-h6 mr-2">Price Level</label>
            <select className="w-[150px] h-[44px] border-primary border-2 px-4">
              <option value="" disabled hidden>
                Select your option
              </option>
              {filter.price?.map((item) => {
                return <option value="">{item}</option>;
              })}
            </select>
          </div>
          {/* choose category type */}
          <div className="flex flex-col">
            <label className="text-h6 mr-2">Category Type</label>
            <select className="w-[150px] h-[44px] border-primary border-2 px-4">
              <option value="" disabled hidden>
                Select your option
              </option>
              <option value="">All</option>
              {arrCategories?.map((item) => {
                return <option value="">{item.name}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
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
            {
              /* if (product.category == "Tables") */
            }
            return (
              <ProductList
                key={product.uuid}
                product={product}
                stt={index + 1}
              />
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
