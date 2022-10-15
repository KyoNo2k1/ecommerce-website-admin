import React, { useEffect, useState } from "react";
import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageHover = ({
  index,
  top = "",
  left = "",
  fileData,
  setFileData,
  setImgName,
  imgName,
  inputValue,
}) => {
  //get file when onchange image file data
  const [file, setFile] = useState(null);
  const [currentArrImg, setCurrentArrImg] = useState(inputValue.arrImg);

  //set currentArrImg to render with inital values is image from firestore
  useEffect(() => {
    if (inputValue.arrImg) {
      setCurrentArrImg(inputValue.arrImg);
    }
  }, [inputValue.arrImg]);
  //set Type input required for image
  const imageMimeType = /image\/(png|jpg|jpeg|jfif)/i;
  //if file exist change to fileReader to render UI
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      //if onChange is file => get image name, url file to render in upload to storage to get URL image
      var newArrImgName = [...imgName];
      newArrImgName[index] = file.name;
      setImgName(newArrImgName);
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;

        if (result && !isCancel) {
          if (index !== -1) {
            //get file to Upload storage
            const newArrImg = [...fileData];
            newArrImg[index] = file;
            setFileData(newArrImg);
            //get file to render image
            const currentImg = [...currentArrImg];
            currentImg[index] = result;
            setCurrentArrImg(currentImg);
          }
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

  //function catch events change image file to get img url set to setFile
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
  return (
    <div className="relative group cursor-pointer" onClick={handleChangeImage}>
      <img
        src={
          currentArrImg[index] ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/60px-OOjs_UI_icon_add.svg.png"
        }
        alt="ProductImage"
        width={305}
        height={332}
        className="pt-px"
      />
      <div className="absolute top-0 left-0 w-full h-full group-hover:bg-invisible_rgba transition ease-linear delay-200"></div>
      <div
        className={`absolute ${top} ${left} w-[20px] h-[20px] z-10 opacity-0 group-hover:opacity-100 transition ease-linear delay-200`}
      >
        <FontAwesomeIcon icon={faCameraRotate} color="white" size="lg" />
      </div>
    </div>
  );
};

export default ImageHover;
