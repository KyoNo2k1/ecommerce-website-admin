import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import inbox from "../images/envelope.png";
import "../styles/notification.css";
import NotificationList from "../components/notificationList";
import React, { useState, useEffect, useRef } from "react";

const Header = ({ user }) => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  if (!!user.email)
    return (
      <div>
        <div className="flex justify-between p-5 border-b-2 border-primary-300">
          <FontAwesomeIcon icon={faSearch} />
          <p className="text-h4 font-semibold">Avion</p>
          <div className="menu-container" ref={menuRef}>
            <div
              className="menu-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon icon={faBell} className="px-3 cursor-pointer" />
              <FontAwesomeIcon icon={faUser} className="px-3" />
            </div>

            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <h3>Notification</h3>
              <NotificationList />
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt=""></img>
      <a href="/#"> {props.text} </a>
    </li>
  );
}

export default Header;
