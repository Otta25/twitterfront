import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createToken } from "../../../reducers/tokenReducer";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
	const [inputUser, setInputUser] = React.useState("");
	const [inputPassword, setInputPassword] = React.useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await axios({
			method: "post",
			url: "http://localhost:8000/login",
			data: {
				username: inputUser,
				password: inputPassword,
			},
		});
		dispatch(createToken(response.data.token));
		navigate("/");
	};

	return (
		<div className="sign-form-body d-flex align-items-center">
			<div className="container-fluid">
				<div className="row">
					<div className="col blueSideCol rounded-start white position-relative px-3 d-none d-lg-block">
						<i className="bi bi-twitter fs-1"></i>
						<h2 className="fw-semibold fs-3 position-absolute bottom-0">
							Hi! Welcome to Twitter Clone 👋
						</h2>
					</div>
					<div className="col bg-white borders user-container">
						<div className="container">
							<h1 className="mb-2 fw-semibold fs-2">Log In</h1>
							<p>Ready to start using Twitter?</p>
							<form
								action="/token"
								method="POST"
								className="sign-up-form"
								onSubmit={handleSubmit}
							>
								<input
									type="text"
									name="user"
									id="user"
									className="form-control"
									placeholder="Username"
									value={inputUser}
									onChange={(event) =>
										setInputUser(event.target.value)
									}
								/>
								<input
									type="password"
									name="password"
									className="form-control"
									placeholder="Password"
									value={inputPassword}
									onChange={(event) =>
										setInputPassword(event.target.value)
									}
								/>
								<button
									type="submit"
									className="btn btn-twitter"
								>
									Login
								</button>
								<span>
									Don't have an account?{" "}
									<Link to="/signup" className="text-primary">
										Sign up
									</Link>
								</span>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
