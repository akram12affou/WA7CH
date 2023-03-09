import React, { useEffect, useState } from "react";
import "../../styles/Header.scss";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_brand">
      <Link to='/'><h2>E-CART</h2></Link>
      </div>
      <div className="navbar_routes">
        <div>
        <Link to='/'> <HomeTwoToneIcon /></Link>
        </div>
        <div className="shopping-icon">
          <ShoppingCartTwoToneIcon />
          <span>0</span>
        </div>
        <Link to='/authForm'><button>Log in</button></Link>
      </div>
      <div className="humburger_container" onClick={() => setIsOpen(true)}>
        <div className="humburger"></div>
      </div>
      <div
        className="humburger_menu_container"
        style={{ transform: isOpen && "translateX(0%)" }}
      >
        <div className="close-button" onClick={() => setIsOpen(false)}>
          <CloseTwoToneIcon />
        </div>
        <div className="humburger_menu">
        <Link to='/'> <HomeTwoToneIcon /> </Link>
          <div className="shopping-icon">
            <ShoppingCartTwoToneIcon />
            <span>0</span>
          </div>
         <Link to='/authForm'> <button>Log in</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
