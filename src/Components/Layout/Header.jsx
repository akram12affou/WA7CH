import React from "react";
import "../../styles/Header.scss";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
function Header() {
  return (
    <div className="navbar">
      <div class="navbar_brand">
        <h2>E-CART</h2>
      </div>
      <div class="navbar_routes">
        <HomeTwoToneIcon />
        <div class="shopping-icon">
          <ShoppingCartTwoToneIcon />
          <span>0</span>
        </div>
        <button>Login</button>
      </div>
      <div className="humburger_menu">
      {/* <HomeTwoToneIcon />
        <div class="shopping-icon">
          <ShoppingCartTwoToneIcon />
          <span>0</span>
        </div>
        <button>Login</button> */}
      </div>
    </div>
  );
}

export default Header;
