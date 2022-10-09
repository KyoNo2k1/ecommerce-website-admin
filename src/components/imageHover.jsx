import React from "react";
import { faCameraRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageHover = ({
  fileDataURL,
  handleChangeImage,
  top = "",
  left = "",
}) => {
  return (
    <div className="relative group cursor-pointer" onClick={handleChangeImage}>
      <img
        src={fileDataURL}
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
