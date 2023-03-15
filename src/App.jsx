import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import React from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const token = useSelector((state) => state.token);
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
