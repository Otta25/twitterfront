import React from "react";
import Tweet from "../Tweet/Tweet";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const token = useSelector((state) => state.token);
  const [profile, setProfile] = useState([]);
  const [tweets, setTweets] = useState([]);

  console.log(token);

  useEffect(() => {
    const getProfileData = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: "http://localhost:8000/usuarios/63fd4e7519cbc68113f037b1",
      });
      setProfile(response.data.user);
      setTweets(response.data.tweets);
    };
    getProfileData();
  }, []);

  useEffect(() => {
    if (!profile) {
      setProfile;
    }
  }, [profile]);

  console.log(profile);
  console.log(tweets);

  {
    profile ? <h2>Fede</h2> : <h2>Error</h2>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-xl-block col-lg-1"></div>
          <div className="col-2 border-end">Nabvar side</div>
          <div className="col-9 col-lg-5 px-0">
            <div id="blue-div">
              <img src="" alt="foto-perfil" id="profile-Photo" />
              <button id="follow-btn">Follow</button>
            </div>
            <div id="white-div">
              <div>
                <h5>
                  {profile.firstname} {profile.lastname}
                </h5>
                <p>@{profile.username}</p>
              </div>
              <div>
                <span>{profile.following.length}</span>
                <span className="gray-letter ms-1 me-2">Following</span>
                <span>{profile.followers.length}</span>
                <span className="gray-letter ms-1 me-2">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
