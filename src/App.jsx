import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/AuthuserPages/Login/Login";
import Profile from "./components/Profile/Profile";
import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const token = useSelector((state) => state.token);
  console.log(token);
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={token ? <Home /> : <Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
