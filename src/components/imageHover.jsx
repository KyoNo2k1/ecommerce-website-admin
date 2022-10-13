import React, { useEffect, useState } from "react";
import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageHover = ({
  index,
  top = "",
  left = "",
  fileDataURL,
  setFileDataURL,
  setImgName,
  imgName,
  inputValue,
}) => {
  const [currentArrImg, setCurrentArrImg] = useState([]);
  const [file, setFile] = useState(null);
  //set Type input required for image
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  //if file exist change to fileReader to render UI
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      var newArrImgName = [...imgName];
      newArrImgName[index] = file.name;
      setImgName(newArrImgName);
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;

        if (result && !isCancel) {
          // const index = fileDataURL.indexOf(result);
          if (index !== -1) {
            const newArrImg = [...fileDataURL];
            newArrImg[index] = file;
            setFileDataURL(newArrImg);

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
          inputValue?.arrImg[index] ||
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
