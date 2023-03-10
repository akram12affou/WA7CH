import React, { useEffect, useState } from "react";
import "../../styles/Header.scss";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { useNavigate } from "react-router-dom";
import {signOut } from 'firebase/auth'
import { useSelector } from "react-redux";
import auth from "../../firebase/firebase";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header({user}) {
  const CartItems = useSelector((state) => state.CartItems);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toTheHome = () => {
    navigate("/");
  };
  const toThForm = () => {
    navigate("/authForm");
  };
  const toThShoppingCart = () => {
    navigate("/shoppingCart");
  };
  const logOut = async () => {
     await signOut(auth);
     navigate("/");
   };
  return (
    <div className="navbar">
      <div className="navbar_brand" onClick={toTheHome}>
        <h2>WA7CH</h2>
      </div>
      <div className="navbar_routes">
        <div  className="home-icon" onClick={toTheHome}>
          <HomeTwoToneIcon />
        </div>
        <div className="shopping-icon" onClick={toThShoppingCart}>
          <ShoppingCartTwoToneIcon />
          <span>{CartItems.length}</span>
          
        </div>
        &nbsp;
        <div>
          
          {user==null ? <button onClick={toThForm}>Log in</button> :
            <div className="logout-name">
                <div style={{'color' : 'black'}}> <><AccountCircleIcon/> {user?.displayName}</> </div>
                &nbsp; <button onClick={logOut}>Sign out</button>
            </div>
             }
        </div>
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
        <div className="humburger_menu" >
          <div className="home-icon" onClick={toTheHome}><HomeTwoToneIcon /></div>
          
          <div className="shopping-icon" onClick={toThShoppingCart}>
            <ShoppingCartTwoToneIcon />
            <span>{CartItems.length}</span>
          </div>
         
           
            {user==null ? <button onClick={toThForm}>Log in</button> :
            <div>
              <p style={{'color' : 'black'}}><AccountCircleIcon/> {user?.displayName}</p> 
                <button onClick={logOut}>Sign out</button>
            </div>
             }
        
        </div>
      </div>
    </div>
  );
}

export default Header;
