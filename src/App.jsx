import React from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Shared/Navigation/Navigation";
import './App.css'
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        {/* Home Route */}
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Register" exact element={<Register/>}/>
        <Route path="/Login" exact element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
