import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faUser } from "@fortawesome/free-solid-svg-icons";

const ReportAnalyticItem = ({
  title,
  value,
  type = "primary",
  icon = "money",
  onClick = () => {},
}) => {
  const box_shadow = { boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" };

  const style = {
    primary: "bg-primary text-[white]",
    secondary: "bg-white text-[primary]",
  };

  const icons = {
    user: faUser,
    money: faCoins,
  };

  return (
    <div
      className={`cursor-pointer hover:bg-[rgba(0,0,0,0.1)] text-center ${style[type]} h-[122px] pt-4`}
      style={box_shadow}
      onClick={onClick}
    >
      <p>{title}</p>
      <p className="text-h3">{value}</p>
      <FontAwesomeIcon icon={icons[icon]} />
    </div>
  );
};

export default ReportAnalyticItem;
