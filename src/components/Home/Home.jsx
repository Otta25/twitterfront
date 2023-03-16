import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import Tweet from "../Tweet/Tweet";
import Navbar from "../Navbar/Navbar";
import WhoToFollow from "../SideCards/WhoToFollow";
import WhatsHappening from "../SideCards/WhatsHappening";

function Home() {
	const token = useSelector((state) => state.token);

	const [user, setUser] = useState([]);

	useEffect(() => {
		const getUser = async () => {
			const response = await axios({
				headers: { Authorization: `Bearer ${token}` },
				method: "get",
				url: "http://localhost:8000",
			});
			setUser(response.data);
		};
		getUser();
	}, []);

	/////////////////////////////////
	const [tweets, setTweets] = React.useState([]);

	useEffect(() => {
		const getTweets = async () => {
			const response = await axios({
				headers: { Authorization: `Bearer ${token}` },
				method: "get",
				url: "http://localhost:8000/tweets",
			});
			setTweets(response.data);
		};
		getTweets();
	}, []);

	return (
		<>
			<div className="container-fluid">
				<div className="row mt-4">
					<div className="d-none d-xl-block col-lg-1"></div>
					<div className="col-2 border-end">
						<Navbar></Navbar>
					</div>

					<div id="main-home-container" className="col-9 col-lg-5">
						{tweets.map(
							(tweet) =>
								tweet.author._id === user._id && (
									<Tweet
										likes={tweet.likes.length}
										content={tweet.content}
										user={tweet.author.username}
									/>
								)
						)}
					</div>

					<div className="d-none d-lg-block col-lg-2 border-start">
						<WhatsHappening user={user} /> <br />
						<WhoToFollow user={user} />
					</div>
					<div className="d-none d-xl-block col-2"></div>
				</div>
			</div>
		</>
	);
}

export default Home;
