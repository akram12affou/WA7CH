import React ,{useEffect, useState} from "react";
import "../../styles/Header.scss";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

function Header() {
  const [isOpen , setIsOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar_brand">
        <h2>E-CART</h2>
      </div>
      <div className="navbar_routes">
        <HomeTwoToneIcon />
        <div className="shopping-icon">
          <ShoppingCartTwoToneIcon />
          <span>0</span>
        </div>
        <button>Log in</button>
      </div>
      <div className="humburger_container" onClick={() => setIsOpen(true)}>
      <div className="humburger" >
      
      </div>
      </div>
      <div className="humburger_menu_container"
       style={{transform : isOpen && 'translateX(0%)'}}>
        <div className="close-button" onClick={() => setIsOpen(false)}>
      <CloseTwoToneIcon/>
      </div>
      <div className='humburger_menu'>
      <HomeTwoToneIcon />
        <div className="shopping-icon">
          <ShoppingCartTwoToneIcon />
          <span>0</span>
        </div>
        <button>Log in</button>
        </div>
        </div>
        
    </div>
  );
}

export default Header;
