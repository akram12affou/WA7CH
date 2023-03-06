import { useDispatch } from "react-redux";
import Header from "./Components/Layout/Header";
import Home from "./Components/pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <Routes>
        {" "}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
