import Style from "../WriteTweet/WriteTweet.module.css";
import { useSelector } from "react-redux";
import React from "react";
import axios from "axios";
import { motion } from "framer-motion";

function WriteTweet({ setTweets, tweets, updateTweetList }) {
	const token = useSelector((state) => state.token);
	const userData = useSelector((state) => state.user);

	const [content, setContent] = React.useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		const response = await axios({
			headers: { Authorization: `Bearer ${token}` },
			method: "post",
			url: "http://localhost:8000/tweets",
			data: {
				content: content,
			},
		});

		setTweets([response.data, ...tweets]);
		updateTweetList();
	};

	return (
		<motion.div
			initial={{ y: -40, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			className="border-bottom border-top w-100"
			transition={{ delay: 0.2, ease: "linear" }}
		>
			<div className="border-bottom p-3">
				<div className="mb-3">
					<label
						for="exampleFormControlInput1"
						className="form-label principal-text pt-3 ps-2"
					>
						Home
					</label>
				</div>
				<form action="/" method="get" onSubmit={handleSubmit}>
					<div className="text-center">
						<div className="row">
							<div className="col-2 d-none d-sm-inline-block">
								<a href="/usuarios/<%=req.user.username%>">
									<img
										className="ms-2 tiny-pic-profile "
										alt=""
										srcSet=""
									/>
								</a>
							</div>
							<div className="col-10">
								<div className="mb-3">
									<textarea
										className="form-control border-0"
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
					<div className="d-flex justify-content-end">
						<button
							className="btn btn-skyblue me-2 rounded-pill px-3"
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
