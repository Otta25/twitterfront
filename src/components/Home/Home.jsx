import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import Tweet from "../Tweet/Tweet";
import Navbar from "../Navbar/Navbar";
import WhoToFollow from "../SideCards/WhoToFollow";
import WhatsHappening from "../SideCards/WhatsHappening";
import WriteTweet from "../WriteTweet/WriteTweet";
import { motion } from "framer-motion";

function Home() {
	const token = useSelector((state) => state.token);
	const userData = useSelector((state) => state.user);
	const [refresh, setRefresh] = useState(false);
	const updateTweetList = () => {
		setRefresh((prev) => !prev);
	};

	const [idsFollowingsAndProfile, setIdsFollowingsAndProfile] =
		React.useState([...userData.following, userData.id]);

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
	}, [refresh]);

	return (
		<>
			<div className="container-fluid">
				<div className="row mt-4">
					<div className="d-none d-md-inline-block col-1"></div>
					<div className="col-1 col-xl-2">
						<Navbar></Navbar>
					</div>

					<div
						id="main-home-container"
						className="col-10 col-md-8 col-lg-6 border-start border-end"
					>
						<WriteTweet
							tweets={tweets}
							setTweets={setTweets}
							updateTweetList={updateTweetList}
							user={userData}
						/>

						{tweets.map(
							(tweet) =>
								idsFollowingsAndProfile.includes(
									tweet.author._id
								) && (
									<Tweet
										user={tweet.author}
										tweet={tweet}
										onDelete={updateTweetList}
									/>
								)
						)}
					</div>

					<div
						id="rightCol"
						className="d-none d-lg-block col-3 col-xxl-2"
					>
						<WhatsHappening /> <WhoToFollow />
					</div>
					<div className="col-3 d-md-none"></div>
				</div>
			</div>
		</>
	);
}

export default Home;
