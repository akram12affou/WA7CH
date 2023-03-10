import React from "react";
import Header from "./Components/Layout/Header";
import Home from "./Components/pages/Home";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./Components/pages/AuthForm";
import {onAuthStateChanged } from 'firebase/auth'
import auth from "./firebase/firebase";
import ProductDetails from "./Components/pages/ProductDetails";
import ShoppingCart from './Components/pages/ShoppingCart'
function App() {
  const [user, setUser] = React.useState([])
  React.useEffect(() => {
    onAuthStateChanged(auth , CurrentUser => {  
      setUser(CurrentUser)
    })
},[user])
  return (
    <div>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/authForm" element={<AuthForm />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
        <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
