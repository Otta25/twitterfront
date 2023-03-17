import React from "react";
import Tweet from "../Tweet/Tweet";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import FollowBtn from "../SmallComponents/FollowBtn";

function Profile() {
	const token = useSelector((state) => state.token);
	const [profile, setProfile] = useState({ followers: [] });
	const [tweets, setTweets] = useState([]);
	const [followersNumber, setFollowersNumber] = useState(0);
	const [followingNumber, setFollowingNumber] = useState(0);
	const { id } = useParams();
	const [user, setUser] = useState([]);
	const [followingsAndMyProfile, setFollowingsAndMyProfile] = React.useState(
		[]
	);
	useEffect(() => {
		const getProfileData = async () => {
			const response = await axios({
				headers: { Authorization: `Bearer ${token}` },
				method: "get",
				url: `http://localhost:8000/users/${id}`,
			});
			setProfile(response.data.data.user);
			setTweets(response.data.data.tweets);
			setFollowersNumber(response.data.data.user.followers.length);
			setFollowingNumber(response.data.data.user.following.length);
			setFollowingsAndMyProfile([
				...response.data.data.user.following,
				response.data.data.user._id,
			]);
		};
		getProfileData();
	}, [profile]);

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

	function follow() {
		const followUser = async () => {
			const response = await axios({
				headers: { Authorization: `Bearer ${token}` },
				method: "post",
				url: `http://localhost:8000/users/follow/${profile._id}`,
			});
		};
		followUser();
		setFollowersNumber(followersNumber + 1);
	}

	function unFollow() {
		const unFollowUser = async () => {
			const response = await axios({
				headers: { Authorization: `Bearer ${token}` },
				method: "delete",
				url: `http://localhost:8000/users/follow/${profile._id}`,
			});
		};
		unFollowUser();
	}

	console.log(tweets);

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="d-none d-xl-block col-lg-1"></div>
					<div className="col-2 border-end">
						<Navbar></Navbar>
					</div>
					<div className="col-9 col-lg-5 px-0">
						<div id="blue-div">
							<img src={profile.photoPortada} alt="" />
							<img
								src={profile.photoProfile}
								alt="foto-perfil"
								id="profile-Photo"
							/>
							{profile.followers.includes(user._id) ? (
								<button
									onClick={() => unFollow()}
									id="unfollow-btn"
								>
									Unfollow
								</button>
							) : (
								<button
									onClick={() => follow()}
									id="follow-btn"
								>
									Follow
								</button>
							)}
						</div>
						<div id="white-div">
							<div>
								<h5>
									{profile.firstname} {profile.lastname}
								</h5>
								<p>@{profile.username}</p>
								<span>{profile.bio}</span>
							</div>
							<div>
								<span>{followingNumber}</span>
								<span className="gray-letter ms-1 me-2">
									Following
								</span>
								<span>{followersNumber}</span>
								<span className="gray-letter ms-1 me-2">
									Followers
								</span>
							</div>
						</div>
						<div className="tweet-container">
							{tweets.map(
								(tweet) =>
									followingsAndMyProfile.includes(
										tweet.author._id
									) && (
										<Tweet
											tweet={tweet}
											user={tweet.author}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Profile;
