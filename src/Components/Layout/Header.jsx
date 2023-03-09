import React, { useEffect, useState } from "react";
import "../../styles/Header.scss";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate()
  const toTheHome = () => {
    navigate('/')
  }
  const toThForm = () => {
    navigate('/authForm')
  }
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar_brand" onClick={toTheHome}>
      <h2>E-CART</h2>
      </div>
      <div className="navbar_routes">
        <div onClick={toTheHome}>  
        <HomeTwoToneIcon />
        </div>
        <div className="shopping-icon">
          <ShoppingCartTwoToneIcon />
          <span>0</span>
        </div>
        <div onClick={toThForm}> <button>Log in</button></div>
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
        <div className="humburger_menu" onClick={toTheHome}>
         <HomeTwoToneIcon /> 
          <div className="shopping-icon">
            <ShoppingCartTwoToneIcon />
            <span>0</span>
          </div>
         <div onClick={toThForm}> <button>Log in</button></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
