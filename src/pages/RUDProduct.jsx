import React, { useEffect } from "react";
import Button from "../components/button";
import LabelInput from "../components/labelInput";
import ImageHover from "../components/imageHover";

//redux
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/productSlice/productSlice";

import { collection, getDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../services/firebase.config";
import { PRODUCTS } from "../services/constant/firestore";

const RUDProduct = () => {
  const { ProductId } = useParams();
  console.log(ProductId);

  //get product form id
  const { product } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleGetProduct = async () => {
    dispatch(getProduct(ProductId));
  };

  //em hong redux duoc, em get truc tiep :(
  const getOneProduct = async (uuid) => {
    const querySnapshot = await getDoc(doc(db, PRODUCTS, uuid));
    if (querySnapshot.exists()) {
      console.log("Document data:", querySnapshot.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    return querySnapshot.data();
  };

  getOneProduct(ProductId);
  console.log(product);

  return (
    <div className="w-[100%]">
      <div className="w-[86%] mx-auto flex justify-between">
        {/*Column left : image */}
        <div className="w-[23%] mt-4">
          <ImageHover top="top-[48%]" left="left-[48%]" />
          {/*Image render 3 pictures */}
          <div className="flex justify-between mt-2">
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover top="top-[40%]" left="left-[40%]" />
            </div>
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover top="top-[40%]" left="left-[40%]" />
            </div>
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover top="top-[40%]" left="left-[40%]" />
            </div>
          </div>
        </div>
        {/*Col middle : Product name, category, dimension description*/}
        <div className="w-[72%] flex justify-between">
          <div className="w-[54%]">
            <LabelInput name={"Product name"} value={product.name} />
            {/*Category input*/}
            <div className="w-[100%] my-4">
              <label className="text-[20px] font-[400]">Category</label>
              <div className="w-full flex mt-2">
                <select
                  name="category"
                  id="category"
                  className="w-[100%] h-[44px] border-primary border-2 px-4"
                >
                  <option value="" disabled hidden>
                    Select your option
                  </option>
                  <option value="plantpots">Plant Pots</option>
                  <option value="ceramic">Ceramic</option>
                  <option value="tables">Tables</option>
                  <option value="chairs">Chairs</option>
                  <option value="crockery">Crockery</option>
                  <option value="tableware">Tableware</option>
                  <option value="cutlery">Cutlery</option>
                </select>
              </div>
            </div>
            <LabelInput
              name={"Dimension ( width x height x lengtht)"}
              value={"2 x 4 x 3"}
            />
            <LabelInput
              name={"Description"}
              value={"This is a chair, not table"}
              className="py-12 col-span-10 row-span-5 text-start"
              textArea={true}
            />
          </div>
          {/*Col right : Price quantity remain Time */}
          <div className="flex flex-col w-[35%] h-[505px]">
            <div className="flex-1">
              <LabelInput name={"Price"} value={"10000"} />
              <div className="flex w-[100%] justify-between">
                <LabelInput
                  name={"Quantity"}
                  value={"200"}
                  halfWidth="w-[49%]"
                />
                <LabelInput name={"Remain"} value={"100"} halfWidth="w-[49%]" />
              </div>
              <LabelInput name={"Time"} value={"02-02-2022"} />
            </div>
            {/*Group button */}
            <div className="flex-col">
              <div className="flex">
                <Button Color="primary">Update</Button>
              </div>
              <div className="flex justify-between mt-2">
                <div className="w-[48%]">
                  <Button Color="secondary" width="w-[100%]">
                    Back
                  </Button>
                </div>
                <div className="w-[48%]">
                  <Button
                    Color="secondary"
                    width="w-[100%]"
                    textColor="text-[red]"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RUDProduct;
