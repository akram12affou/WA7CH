
import Header from "./Components/Layout/Header";
import Home from "./Components/pages/Home";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./Components/pages/AuthForm";
import ProductDetails from "./Components/pages/ProductDetails";
function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/authForm" element={<AuthForm />}></Route>
        <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
