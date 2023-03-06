import { useDispatch } from "react-redux";
import Header from "./Components/Layout/Header";
import Home from "./Components/pages/Home";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./Components/pages/AuthForm";
function App() {
  
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/authForm" element={<AuthForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
