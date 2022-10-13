import React, { useEffect, useState } from "react";
import Button from "../components/button";
import LabelInput from "../components/labelInput";
import ImageHover from "../components/imageHover";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  updateArrImg,
} from "../redux/productSlice/productSlice";
import { updateProduct } from "./../redux/productSlice/productSlice";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "../services/firebase.config";

const RUDProduct = () => {
  const { arrCategories } = useSelector((store) => store.products);
  const [fileDataURL, setFileDataURL] = useState([]);
  const [imgName, setImgName] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  let { Type } = useParams();
  //All value in input fields
  const [inputValue, setInputValue] = useState({
    name: "",
    category: "",
    dimension: "",
    description: "",
    price: "",
    quantity: "",
    remain: "",
    arrImg: [],
  });
  useEffect(() => {
    if (location.state) {
      setInputValue(location.state);
    }
  }, [location.state]);

  //function add product
  const handleAddProduct = async () => {
    // Check fill all blank
    var checkField = false;
    Object.values(inputValue).forEach(function check(value) {
      if (check.stop) {
        checkField = true;
        return;
      }
      if (value === "") {
        alert("Please fill all the blank fields");
        check.stop = true;
      }
    });
    if (checkField) return;

    const idAdded = await dispatch(createProduct(inputValue));
    if (idAdded) {
      let arrUrl = [];
      await fileDataURL.forEach(async function (link, i) {
        const imgRef = ref(
          storage,
          `products/${idAdded.payload}/${imgName[i]}`
        );
        const snap = await uploadBytes(imgRef, fileDataURL[i]);
        const pictureURL = await getDownloadURL(
          ref(storage, snap.ref.fullPath)
        );
        arrUrl.push(pictureURL);
        await dispatch(updateArrImg({ uuid: idAdded.payload, arrImg: arrUrl }));
      });
    }
  };

  //function update product
  const handleUpdateProduct = () => {
    var checkField = false;
    Object.values(inputValue).forEach(function check(value) {
      if (check.stop) {
        checkField = true;
        return;
      }
      if (value === "") {
        alert("Please fill all the blank fields");
        check.stop = true;
      }
    });
    if (checkField) return;

    dispatch(updateProduct(inputValue));
    navigate("../Product");
  };

  const handleDelete = async (id) => {
    let text = "You want to delete this product?";
    if (window.confirm(text) === true) {
      dispatch(deleteProduct(id));
    }
  };
  console.log(inputValue);

  return (
    <div className="w-[100%]">
      <div className="w-[86%] mx-auto flex justify-between">
        {/*Column left : image */}
        <div className="w-[23%] mt-4">
          <ImageHover
            index={0}
            top="top-[48%]"
            left="left-[48%]"
            fileDataURL={fileDataURL}
            setFileDataURL={setFileDataURL}
            setImgName={setImgName}
            imgName={imgName}
            inputValue={inputValue}
          />
          {/*Image render 3 pictures */}
          <div className="flex justify-between mt-2">
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover
                index={1}
                top="top-[40%]"
                left="left-[40%]"
                fileDataURL={fileDataURL}
                setFileDataURL={setFileDataURL}
                imgName={imgName}
                setImgName={setImgName}
                inputValue={inputValue}
              />
            </div>
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover
                index={2}
                top="top-[40%]"
                left="left-[40%]"
                fileDataURL={fileDataURL}
                setFileDataURL={setFileDataURL}
                imgName={imgName}
                setImgName={setImgName}
                inputValue={inputValue}
              />
            </div>
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover
                index={3}
                top="top-[40%]"
                left="left-[40%]"
                fileDataURL={fileDataURL}
                setFileDataURL={setFileDataURL}
                imgName={imgName}
                setImgName={setImgName}
                inputValue={inputValue}
              />
            </div>
          </div>
        </div>
        {/*Col middle : Product name, category, dimension description*/}
        <div className="w-[72%] flex justify-between">
          <div className="w-[54%]">
            <LabelInput
              name={"Product name"}
              value={inputValue?.name}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            {/*Category input*/}
            <div className="w-[100%] my-4">
              <label className="text-[20px] font-[400]">Category</label>
              <div className="w-full flex mt-2">
                <select
                  name="category"
                  id="category"
                  className="w-[100%] h-[44px] border-primary border-2 px-4"
                  onChange={(e) =>
                    setInputValue({
                      ...inputValue,
                      category: e.target.value,
                    })
                  }
                  value={inputValue?.category}
                >
                  <option value="" disabled hidden>
                    Select your option
                  </option>
                  {arrCategories?.map((category) => {
                    return (
                      <option key={category.uuid} value={category.name}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <LabelInput
              name={"Dimension ( width x height x lengtht)"}
              value={inputValue?.dimension}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            <LabelInput
              name={"Description"}
              className="py-12 col-span-10 row-span-5 text-start"
              textArea={true}
              value={inputValue?.description}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
          {/*Col right : Price quantity remain Time */}
          <div className="flex flex-col w-[35%] h-[505px]">
            <div className="flex-1">
              <LabelInput
                name={"Price"}
                value={inputValue?.price}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
              <div className="flex w-[100%] justify-between">
                <LabelInput
                  name={"Quantity"}
                  value={inputValue?.quantity}
                  halfWidth="w-[49%]"
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
                <LabelInput
                  name={"Remain"}
                  value={inputValue?.remain}
                  halfWidth="w-[49%]"
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </div>
            </div>
            {/*Group button */}
            {Type !== "Add" ? (
              <div className="flex-col">
                <div className="flex" onClick={() => handleUpdateProduct()}>
                  <Button Color="primary">Update</Button>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="w-[48%]" onClick={() => navigate(-1)}>
                    <Button Color="secondary" width="w-[100%]">
                      Back
                    </Button>
                  </div>
                  <div className="w-[48%]" onClick={() => handleDelete()}>
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
            ) : (
              <div className="flex pb-12" onClick={() => handleAddProduct()}>
                <Button Color="primary">Add new</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RUDProduct;
