import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faListCheck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  order: faListCheck,
  stock: faClock,
};

const titles = {
  order: "Transaction",
  stock: "Out of Stock",
};

const values = {
  waiting: "Waiting Confirm",
  completed: "Delivery Success",
  long: "2 next weeks",
  short: "3 days",
};

const NotificationItem = ({ type, id, value, content, created_date }) => {
  return (
    <li>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold">
            {titles[type]} - {values[value]} - {id}
          </span>
          <p className="text-h6">{content}</p>
          <br />
          <p className="text-caption font-medium italic">{created_date}</p>
        </div>
        <FontAwesomeIcon icon={icons[type]} />
      </div>
    </li>
  );
};

export default NotificationItem;
