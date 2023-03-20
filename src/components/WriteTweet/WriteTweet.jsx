import { useSelector } from "react-redux";
import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "./WriteTweet.css";

function WriteTweet({ setTweets, tweets, updateTweetList }) {
	const token = useSelector((state) => state.token);
	const userData = useSelector((state) => state.user);
	const [content, setContent] = React.useState("");
	const [userPhoto, setUserPhoto] = React.useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await axios({
			headers: { Authorization: `Bearer ${token}` },
			method: "post",
			url: `${process.env.REACT_APP_API_URL}/tweets`,
			data: {
				content: content,
			},
		});

		setTweets([response.data, ...tweets]);
		updateTweetList();
		setContent("");
	};

	React.useEffect(() => {
		const getUserPhoto = async () => {
			const response = await axios({
				headers: { Authorization: `Bearer ${token}` },
				method: "get",
				url: `http://localhost:8000/users/${userData.id}`,
			});

			setUserPhoto(response.data.data.user.photoProfile);
		};
		getUserPhoto();
	}, []);

	console.log(userPhoto);

	return (
		<motion.div
			initial={{ y: -40, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className="border-bottom w-100"
			transition={{ delay: 0.2, ease: "linear" }}
		>
			<div class="border-bottom p-3">
				<div class="mb-3">
					<label
						for="exampleFormControlInput1"
						class="form-label principal-text pt-3 ps-2"
					>
						Home
					</label>
				</div>
				<form
					action="/"
					method="get"
					onSubmit={handleSubmit}
					className="border border-2 border-primary border-opacity-25 p-3 rounded bg-light"
				>
					<div class="text-center">
						<div class="row">
							<div class="col-1 d-none d-sm-inline-block">
								<img
									class="ms-auto tiny-pic-profile border border-4 border-primary border-opacity-25"
									alt=""
									src={userPhoto}
								/>
							</div>
							<div class="col-10">
								<div class="mb-3">
									<textarea
										class="form-control border-0 border bg-light"
										id="exampleFormControlTextarea1"
										rows="3"
										placeholder="What’s happening?"
										name="content"
										onChange={(event) =>
											setContent(event.target.value)
										}
										value={content}
										required
									></textarea>
								</div>
							</div>
						</div>
					</div>
					<div class="d-flex justify-content-end">
						<button
							class="btn btn-skyblue me-2 rounded-pill px-3"
							type="submit"
						>
							Tweet
						</button>
					</div>
				</form>
			</div>
		</motion.div>
	);
}

export default WriteTweet;
