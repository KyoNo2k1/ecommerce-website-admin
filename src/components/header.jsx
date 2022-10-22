import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import inbox from "../images/envelope.png";
import "../styles/notification.css";
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
          <p className="text-h4 font-semibold">Ecommerce</p>
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
              <h3>
                Admin
                <br />
                <span>E-commerce website</span>
              </h3>
              <ul>
                {/* <DropdownItem img={user} text={"My Profile"} />
              <DropdownItem img={edit} text={"Edit Profile"} /> */}
                <DropdownItem img={inbox} text={"Notification"} />
                <DropdownItem img={inbox} text={"Notification"} />
                <DropdownItem img={inbox} text={"Notification"} />
                <DropdownItem img={inbox} text={"Notification"} />

                {/* <DropdownItem img={settings} text={"Settings"} />
              <DropdownItem img={help} text={"Helps"} />
              <DropdownItem img={logout} text={"Logout"} /> */}
              </ul>
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
