import React from "react";
import Tweet from "../Tweet/Tweet";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import FollowBtn from "../SmallComponents/FollowBtn";
import { NavLink } from "react-router-dom";

function Profile() {
  const token = useSelector((state) => state.token);
  const userDates = useSelector((state) => state.user);
  const [profile, setProfile] = useState({ followers: [] });
  const [tweets, setTweets] = useState([]);
  const [followersNumber, setFollowersNumber] = useState(0);
  const [followingNumber, setFollowingNumber] = useState(0);
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
    };
    getProfileData();
  }, [refresh]);

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
    setRefresh((prev) => !prev);
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
    setRefresh((prev) => !prev);
  }

  console.log(tweets);
  console.log(userDates.id);
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
              {user._id === profile._id ? (
                <></>
              ) : profile.followers.includes(user._id) ? (
                <button onClick={() => unFollow()} id="unfollow-btn">
                  Unfollow
                </button>
              ) : (
                <button onClick={() => follow()} id="follow-btn">
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
                <NavLink to={`following `}>
                  <span>{followingNumber}</span>
                  <span className="gray-letter ms-1 me-2">Following</span>
                </NavLink>
                <NavLink to={`followers `}>
                  <span>{followersNumber}</span>
                  <span className="gray-letter ms-1 me-2">Followers</span>
                </NavLink>
              </div>
            </div>
            <div className="tweet-container">
              {tweets.map(
                (tweet) =>
                  userDates.id === tweet.author._id && (
                    <Tweet tweet={tweet} user={tweet.author} />
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
