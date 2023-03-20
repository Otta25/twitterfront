import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import WhoToFollow from "../SideCards/WhoToFollow";
import WhatsHappening from "../SideCards/WhatsHappening";
import ToFollow from "./ToFollow";

function Following({}) {
  const token = useSelector((state) => state.token);
  const userData = useSelector((state) => state.user);
  const { id } = useParams();
  ////////////////////////
  const [profile, setProfile] = React.useState([]);
  const [refresh, setRefresh] = useState(false);

  const updateFollowingList = () => {
    setRefresh((prev) => !prev);
  };

  /////////////////////////////////
  const [following, setFollowing] = React.useState([]);

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

  useEffect(() => {
    const getFollowing = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: `http://localhost:8000/users/${id}/following`,
      });
      setFollowing(response.data);
    };
    getFollowing();
  }, [refresh]);

  /////////////////////////////////
  
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="d-none d-xl-block col-lg-1"></div>
          <div className="col-2 border-end">
            <Navbar></Navbar>
          </div>
          <div id="main-home-container" className="col-9 col-lg-5">
            <div className="container ">
              <h2 className="container">
                {profile.firstname} {profile.lastname}
              </h2>
              <p className="container">@{profile.username}</p>
            </div>
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <NavLink
                    to={`/users/${id}/followers`}
                    state={{ token }}
                    className=" standard-item"
                    profile={profile}
                  >
                    Followers
                  </NavLink>
                </div>
                <div className="col">
                  <NavLink
                    to={`/users/${id}/following`}
                    state={{ token }}
                    className="standard-item focused-item"
                    profile={profile}
                  >
                    Following
                  </NavLink>
                </div>
              </div>
            </div>

            {following.map((user) => (
              <ToFollow user={user} updateFollowingList={updateFollowingList} />
            ))}
          </div>
          <div className="d-none d-lg-block col-lg-2 border-start">
            <WhatsHappening /> <br />{" "}
            <WhoToFollow update={updateFollowingList} />
          </div>
          <div className="d-none d-xl-block col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Following;
