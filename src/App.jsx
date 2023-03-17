import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/AuthuserPages/Login/Login";
import SignUp from "./components/AuthuserPages/SignUp/SignUp";
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
				<Route path="/signup" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				<Route path="http://localhost:8000/users" element={<Login />} />
				<Route path="/" element={token ? <Home /> : <Login />} />
				<Route path="/users/:id" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default App;
