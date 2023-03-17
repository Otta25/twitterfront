import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createToken } from "../../../reducers/tokenReducer";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
	const [inputFirstName, setInputFirstName] = React.useState("");
	const [inputLastName, setInputLastName] = React.useState("");
	const [inputEmail, setInputEmail] = React.useState("");
	const [inputUsername, setInputUsername] = React.useState("");
	const [inputPassword, setInputPassword] = React.useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		await axios({
			method: "post",
			url: "http://localhost:8000/users",
			data: {
				firstname: inputFirstName,
				lastname: inputLastName,
				email: inputEmail,
				username: inputUsername,
				password: inputPassword,
			},
		});
		navigate("/login");
	};

	return (
		<div class="sign-form-body d-flex align-items-center">
			<div class="container-fluid">
				<div class="row">
					<div class="col blueSideCol rounded-start white position-relative px-3 d-none d-lg-block">
						<i class="bi bi-twitter fs-1"></i>
						<h2 class="fw-semibold fs-3 position-absolute bottom-0">
							Hi! Welcome to Twitter Clone 👋
						</h2>
					</div>
					<div class="col borders bg-white rounded-end user-container">
						<div class="container">
							<h1 class="mb-2 fw-semibold fs-2">Sign Up</h1>
							<p>Create and account and start using Twitter</p>
							<form
								action="/users"
								enctype="multipart/form-data"
								method="post"
								class="sign-up-form"
								onSubmit={handleSubmit}
							>
								<input
									name="firstname"
									type="text"
									class="form-control"
									id="firstname"
									placeholder="Firstname"
									value={inputFirstName}
									onChange={(event) =>
										setInputFirstName(event.target.value)
									}
									required
								/>

								<input
									name="lastname"
									type="text"
									class="form-control"
									id="lastname"
									placeholder="Lastname"
									value={inputLastName}
									onChange={(event) =>
										setInputLastName(event.target.value)
									}
									required
								/>

								<input
									name="email"
									type="email"
									class="form-control"
									placeholder="Email"
									value={inputEmail}
									onChange={(event) =>
										setInputEmail(event.target.value)
									}
									required
								/>

								<input
									name="username"
									type="text"
									class="form-control"
									placeholder="Username"
									value={inputUsername}
									onChange={(event) =>
										setInputUsername(event.target.value)
									}
									required
								/>

								<input
									name="password"
									type="password"
									class="form-control"
									placeholder="Password"
									value={inputPassword}
									onChange={(event) =>
										setInputPassword(event.target.value)
									}
									required
								/>

								<button type="submit" class="btn btn-twitter">
									Sign Up
								</button>
								<span>
									Already have an account?
									<Link to="/login" class="text-primary">
										Log in
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

export default SignUp;
