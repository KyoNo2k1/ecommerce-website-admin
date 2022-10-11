import React, { useEffect, useState } from "react";
import "../styles/topProduct.css";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getProducts, createProduct } from "../redux/productSlice/productSlice";
import ButtonIcon from "../components/buttonIcon";

//setting
import Modal from "../components/modal";
import { getCategories } from "./../redux/productSlice/productSlice";
import ProductList from "./../components/productList";

const Product = () => {
  //show modal add new product
  const [modalAddProduct, setModalAddProduct] = useState(false);
  //get data product from store redux
  const { arrProducts, arrCategories } = useSelector((store) => store.products);
  const dispatch = useDispatch();
  console.log(arrCategories);
  //get data firsttime
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);
  const contentData = [
    {
      id: "productName",
      label: "Product Name",
      input: "",
    },
    {
      id: "productPrice",
      label: "Price",
      input: "",
    },
    {
      id: "productQuantity",
      label: "Quantity",
      input: "",
    },
    {
      id: "productCategory",
      label: "Category",
      input: "",
    },
  ];
  const handleCreateProduct = async () => {
    const dataCreate = {
      category: document.getElementById("productCategory").value,
      name: document.getElementById("productName").value,
      quantity: document.getElementById("productQuantity").value,
      price: document.getElementById("productPrice").value,
    };
    dispatch(createProduct(dataCreate));
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
          {arrProducts?.map((product) => {
            //convert time from timestamp to time
            return <ProductList key={product.name} product={product} />;
          })}
        </tbody>
      </table>
      <ButtonIcon
        position="bottom"
        handleEvent={() => setModalAddProduct(true)}
      />
      {/*Model create new product */}
      <Modal
        isInvisible={modalAddProduct}
        onClose={() => setModalAddProduct(false)}
        arrInput={contentData}
        onSubmit={handleCreateProduct}
      />
    </div>
  );
};

export default Product;
