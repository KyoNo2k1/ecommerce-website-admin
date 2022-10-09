import React, { useEffect, useState } from "react";
import Button from "../components/button";
import LabelInput from "../components/labelInput";
import ProductImage from "../images/productImage.png";
import ImageHover from "../components/imageHover";

const RUDProduct = () => {
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(ProductImage);
  const [file1, setFile1] = useState(null);
  const [fileDataURL1, setFileDataURL1] = useState(ProductImage);
  const [file2, setFile2] = useState(null);
  const [fileDataURL2, setFileDataURL2] = useState(ProductImage);
  const [file3, setFile3] = useState(null);
  const [fileDataURL3, setFileDataURL3] = useState(ProductImage);
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const handleChangeImage = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = () => {
      if (!input.files[0]?.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
        return;
      }
      setFile(input.files[0]);
    };
    input.click();
  };
  const handleChangeImage1 = () => {
    let input1 = document.createElement("input");
    input1.type = "file";
    input1.onchange = () => {
      if (!input1.files[0]?.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
        return;
      }
      setFile1(input1.files[0]);
    };
    input1.click();
  };
  const handleChangeImage2 = () => {
    let input2 = document.createElement("input");
    input2.type = "file";
    input2.onchange = () => {
      if (!input2.files[0]?.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
        return;
      }
      setFile2(input2.files[0]);
    };
    input2.click();
  };
  const handleChangeImage3 = () => {
    let input3 = document.createElement("input");
    input3.type = "file";
    input3.onchange = () => {
      if (!input3.files[0]?.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
        return;
      }
      setFile3(input3.files[0]);
    };
    input3.click();
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file1) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL1(result);
        }
      };
      fileReader.readAsDataURL(file1);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file1]);
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file2) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL2(result);
        }
      };
      fileReader.readAsDataURL(file2);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file2]);
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file3) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL3(result);
        }
      };
      fileReader.readAsDataURL(file3);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file3]);

  return (
    <div className="w-[100%]">
      <div className="w-[86%] mx-auto flex justify-between">
        {/*Column left : image */}
        <div className="w-[23%] mt-4">
          <ImageHover
            fileDataURL={fileDataURL}
            handleChangeImage={handleChangeImage}
            top="top-[48%]"
            left="left-[48%]"
          />
          {/*Image render 3 pictures */}
          <div className="flex justify-between mt-2">
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover
                fileDataURL={fileDataURL1}
                handleChangeImage={handleChangeImage1}
                top="top-[40%]"
                left="left-[40%]"
              />
            </div>
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover
                fileDataURL={fileDataURL2}
                handleChangeImage={handleChangeImage2}
                top="top-[40%]"
                left="left-[40%]"
              />
            </div>
            <div className="h-[90px] w-[30%] border-2 border-border_grey group relative">
              <ImageHover
                fileDataURL={fileDataURL3}
                handleChangeImage={handleChangeImage3}
                top="top-[40%]"
                left="left-[40%]"
              />
            </div>
          </div>
        </div>
        {/*Col middle : Product name, category, dimension description*/}
        <div className="w-[72%] flex justify-between">
          <div className="w-[54%]">
            <LabelInput name={"Product name"} value={"Name product"} />
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
              className="h-[150px] text-start"
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
                <Button Color="primary">Confirm</Button>
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
