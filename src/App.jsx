import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import React from "react";
import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom";


function App() {
  const token = useSelector((state) => state.token);
  console.log(token)
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={token ? <Home />:<Login/>} />
       
      </Routes>
    </div>
  );
}

export default App;
