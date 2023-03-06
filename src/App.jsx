import { useDispatch } from "react-redux";
import Header from "./Components/Layout/Header";
import ProductCarousel from "./Components/ProductsCarousel";
import { Routes, Route } from "react-router-dom";
function App() {
  // https://fakestoreapi.com/products
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <Routes>
        {" "}
        <Route path="/" element={<ProductCarousel />}></Route>
      </Routes>
    </div>
  );
}

export default App;
