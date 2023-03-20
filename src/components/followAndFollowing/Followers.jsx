import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import "./Followers.css";

import ToFollow from "./ToFollow";

import Navbar from "../Navbar/Navbar";
import WhoToFollow from "../SideCards/WhoToFollow";
import WhatsHappening from "../SideCards/WhatsHappening";

function Followers({}) {
  const token = useSelector((state) => state.token);
  const { id } = useParams();
  const [refresh, setRefresh] = useState(false);

  ////////////////////////
  const [profile, setProfile] = React.useState([]);

  useEffect(() => {
    const getProfileData = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: `http://localhost:8000/users/${id}`,
      });
      setProfile(response.data.data.user);
    };
    getProfileData();
  }, []);

  const [followers, setFollowers] = React.useState([]);
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: `http://localhost:8000/users/${id}/followers`,
      });
      setFollowers(response.data);
    };
    getFollowers();
  }, []);

  const updateFollowingList = () => {
    setRefresh((prev) => !prev);
  };

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
            <div className="container ">
              <h2 className="container">
                {profile.firstname} {profile.lastname}
              </h2>
              <p className="container">@{profile.username}</p>
            </div>
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <NavLink
                    to={`/users/${id}/followers`}
                    state={{ token }}
                    className="focused-item standard-item"
                  >
                    Followers
                  </NavLink>
                </div>
                <div class="col">
                  <NavLink
                    to={`/users/${id}/following`}
                    state={{ token }}
                    className="standard-item"
                  >
                    Following
                  </NavLink>
                </div>
              </div>
            </div>
            {followers.map((user) => (
              <ToFollow
                user={user}
                updateFollowingList={updateFollowingList}
              ></ToFollow>
            ))}
          </div>
          <div id="rightCol" className="d-none d-lg-block col-3 col-xxl-2">
            <WhatsHappening /> <br /> <WhoToFollow />
          </div>
          <div className="col-3 d-md-none"></div>
        </div>
      </div>
    </>
  );
}

export default Followers;
