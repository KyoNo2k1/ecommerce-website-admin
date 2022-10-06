import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-5 border-b-2 border-primary-300">
        <FontAwesomeIcon icon={faSearch} />
        <p className="text-h4 font-semibold">Ecommerce</p>
        <div>
          <FontAwesomeIcon icon={faBell} className="px-3" />
          <FontAwesomeIcon icon={faUser} className="px-3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
