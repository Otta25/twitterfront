import React from "react";
import axios from "axios";

import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
	const [inputFirstName, setInputFirstName] = React.useState("");
	const [inputLastName, setInputLastName] = React.useState("");
	const [inputEmail, setInputEmail] = React.useState("");
	const [inputUsername, setInputUsername] = React.useState("");
	const [inputPassword, setInputPassword] = React.useState("");

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		await axios({
			method: "post",
			url: "http://localhost:8000/users",
			headers: {
				"Content-Type": "multipart/form-data",
			},
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
		<div className="sign-form-body d-flex align-items-center">
			<div className="container-fluid">
				<div className="row">
					<div className="col blueSideCol rounded-start white position-relative px-3 d-none d-lg-block">
						<i className="bi bi-twitter fs-1"></i>
						<h2 className="fw-semibold fs-3 position-absolute bottom-0">
							Hi! Welcome to Twitter Clone 👋
						</h2>
					</div>
					<div className="col borders bg-white rounded-end user-container">
						<div className="container">
							<h1 className="mb-2 fw-semibold fs-2">Sign Up</h1>
							<p>Create and account and start using Twitter</p>
							<form
								action="http://localhost:8000/users"
								method="post"
								className="sign-up-form"
								onSubmit={handleSubmit}
							>
								<input
									name="firstname"
									type="text"
									className="form-control"
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
									className="form-control"
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
									className="form-control"
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
									className="form-control"
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
									className="form-control"
									placeholder="Password"
									value={inputPassword}
									onChange={(event) =>
										setInputPassword(event.target.value)
									}
									required
								/>

								<button
									type="submit"
									className="btn btn-twitter"
								>
									Sign Up
								</button>
								<span>
									Already have an account?
									<Link to="/login" className="text-primary">
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
