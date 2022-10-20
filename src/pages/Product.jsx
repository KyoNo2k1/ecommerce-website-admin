import React, { useEffect, useState } from "react";
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
  const {
    arrProducts,
    arrCategories,
    statusCreateProduct,
    statusUpdateProduct,
    statusDeleteProduct,
  } = useSelector((store) => store.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get product set to currentArrProducts to filter
  const [currentArrProducts, setCurrentArrProducts] = useState(arrProducts);
  // filter name value
  const [filtedName, setFiltedName] = useState("");
  //get data firsttime
  useEffect(() => {
    // dispatch(getProducts());
    // dispatch(getCategories());
  }, []);
  useEffect(() => {
    if (arrProducts) {
      setCurrentArrProducts(arrProducts);
    }
  }, [arrProducts]);
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
    price: ["All", "0 - 50", "51 - 100", ">100"],
    remain: ["All", "0 - 20", "21 - 50", "51 - 100", ">100"],
  };

  //handle filter
  const handleFilterCategory = (e) => {
    if (e.target.value) {
      const filtedProduct = arrProducts.filter(
        (data) => data.category === e.target.value
      );
      setCurrentArrProducts(filtedProduct);
    }
  };
  const handleFilterName = (e) => {
    setFiltedName(e.target.value);
    const filtedProduct = arrProducts.filter((data) =>
      data.name.toLowerCase().includes(e.target.value)
    );
    setCurrentArrProducts(filtedProduct);
  };
  const handleFilterRemain = (e) => {
    var filtedProduct = [];
    switch (Number(e.target.value)) {
      case 0:
        filtedProduct = arrProducts;
        setCurrentArrProducts(filtedProduct);
        break;
      case 1:
        filtedProduct = arrProducts.filter((data) => Number(data.remain) < 20);
        setCurrentArrProducts(filtedProduct);
        break;
      case 2:
        filtedProduct = arrProducts.filter(
          (data) => Number(data.remain) <= 50 && Number(data.remain) > 20
        );
        setCurrentArrProducts(filtedProduct);
        break;
      case 3:
        filtedProduct = arrProducts.filter(
          (data) => Number(data.remain) <= 100 && Number(data.remain) > 50
        );
        setCurrentArrProducts(filtedProduct);
        break;
      case 4:
        filtedProduct = arrProducts.filter((data) => Number(data.remain) > 100);
        setCurrentArrProducts(filtedProduct);
        break;
      default:
        break;
    }
  };

  const handleFilterPrice = (e) => {
    var filtedProduct = [];

    switch (Number(e.target.value.trim())) {
      case 0:
        filtedProduct = arrProducts;
        setCurrentArrProducts(filtedProduct);
        break;
      case 1:
        filtedProduct = arrProducts.filter((data) => Number(data.price) < 50);
        setCurrentArrProducts(filtedProduct);
        break;
      case 2:
        filtedProduct = arrProducts.filter(
          (data) => Number(data.price) <= 100 && Number(data.price) > 50
        );
        setCurrentArrProducts(filtedProduct);
        break;
      case 3:
        filtedProduct = arrProducts.filter((data) => Number(data.price) > 100);
        setCurrentArrProducts(filtedProduct);
        break;
      default:
        break;
    }
  };

  return (
    <div className="px-24 my-2">
      <div className="flex justify-between font-clash mb-3">
        <p className="text-h6 font-bold">{`Total - ${currentArrProducts.length}`}</p>
        <div className="flex">
          {/* Search by name */}
          <div className="mr-3 flex flex-col">
            <label className="text-h6 mr-2">Search by name</label>
            <input
              value={filtedName}
              className="w-[100%] h-[44px] border-primary border-2 px-4"
              placeholder="All"
              onChange={(e) => handleFilterName(e)}
            />
          </div>
          {/* choose remain quantity type */}
          <div className="mr-3 flex flex-col">
            <label className="text-h6 mr-2">Remain</label>
            <select
              className="w-[150px] h-[44px] border-primary border-2 px-4"
              onChange={(e) => handleFilterRemain(e)}
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              {filter.remain?.map((item, index) => {
                return (
                  <option value={index} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* choose price type */}
          <div className="mr-3 flex flex-col">
            <label className="text-h6 mr-2">Price Level</label>
            <select
              className="w-[150px] h-[44px] border-primary border-2 px-4"
              onChange={(e) => handleFilterPrice(e)}
            >
              <option value="" disabled hidden>
                Select your option
              </option>
              {filter.price?.map((item, index) => {
                return (
                  <option value={index} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          {/* choose category type */}
          <div className="flex flex-col">
            <label className="text-h6 mr-2">Category Type</label>
            <select
              className="w-[150px] h-[44px] border-primary border-2 px-4"
              onChange={(e) => handleFilterCategory(e)}
            >
              <option value="">All</option>
              {arrCategories?.map((item) => {
                return (
                  <option value={item.name} key={item.uuid}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="px-24 my-2 mb-24">
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
            {currentArrProducts?.map((product, index) => {
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
    </div>
  );
};

export default Product;
