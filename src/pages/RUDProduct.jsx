import React, { useEffect, useState } from "react";
import Button from "../components/button";
import LabelInput from "../components/labelInput";
import ImageHover from "../components/imageHover";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  updateArrImg,
} from "../redux/productSlice/productSlice";
import { updateProduct } from "./../redux/productSlice/productSlice";
import {
  getDownloadURL,
  uploadBytes,
  ref,
  deleteObject,
} from "firebase/storage";
import { storage } from "../services/firebase.config";
import { toast } from "react-toastify";

const RUDProduct = () => {
  //get category from store
  const {
    arrCategories,
    statusCreateProduct,
    statusDeleteProduct,
    statusUpdateProduct,
    productCreatedId,
  } = useSelector((store) => store.products);
  //fire data after change (add, update)
  const [fileData, setFileData] = useState([]);
  const [imgName, setImgName] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { Type, Id } = useParams();

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
  //get data from params and set to input value
  useEffect(() => {
    if (location.state) {
      setInputValue(location.state);
    }
  }, [location.state]);

  useEffect(() => {
    if (productCreatedId) {
      try {
        let arrUrl = [];
        fileData.forEach(async function (link, i) {
          //get Ref and add to storage
          const imgRef = ref(storage, `products/${productCreatedId}/${i}`);
          const snap = await uploadBytes(imgRef, fileData[i]);
          const pictureURL = await getDownloadURL(
            ref(storage, snap.ref.fullPath)
          );
          arrUrl.push(pictureURL);
          //update firestore
          await dispatch(
            updateArrImg({ uuid: productCreatedId, arrImg: arrUrl })
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [productCreatedId]);
  //check status CUD products
  useEffect(() => {
    if (
      statusCreateProduct === "success" ||
      statusDeleteProduct === "success" ||
      statusUpdateProduct === "success"
    )
      navigate("../Product");
  }, [statusUpdateProduct, statusDeleteProduct, statusCreateProduct]);

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
    //get ID product after create and set folder name of image storare
    await dispatch(createProduct(inputValue));
  };

  //function update product
  const handleUpdateProduct = async () => {
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

    //update image storage
    if (fileData) {
      await fileData.forEach(async function (link, i) {
        //delete old image on storage
        const oldImgRef = ref(storage, `products/${Id}/${i}`);
        await deleteObject(oldImgRef)
          .then(async () => {
            //add new image to storage
            var newArrUrl = [...inputValue.arrImg];
            const newImgRef = ref(storage, `products/${Id}/${i}`);
            const snap = await uploadBytes(newImgRef, fileData[i]);
            const pictureURL = await getDownloadURL(
              ref(storage, snap.ref.fullPath)
            );
            newArrUrl[i] = pictureURL;
            await dispatch(updateArrImg({ uuid: Id, arrImg: newArrUrl }));
          })
          .catch((error) => console.log(error));
      });
    }

    dispatch(updateProduct(inputValue));
  };

  //delete product
  const handleDelete = async (id) => {
    let text = "You want to delete this product?";
    if (window.confirm(text) === true) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="w-[100%]">
      <div className="w-[86%] mx-auto flex justify-between">
        {/*Column left : image */}
        <div className="w-[23%] mt-4">
          <ImageHover
            index={0}
            top="top-[48%]"
            left="left-[48%]"
            fileData={fileData}
            setFileData={setFileData}
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
                fileData={fileData}
                setFileData={setFileData}
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
                fileData={fileData}
                setFileData={setFileData}
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
                fileData={fileData}
                setFileData={setFileData}
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
