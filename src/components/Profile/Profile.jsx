import React from "react";
import Tweet from "../Tweet/Tweet";
import Style from "../Profile/Profile.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const token = useSelector((state) => state.token);
  const [profile, setProfile] = useState();
  const [tweets, setTweets] = useState();

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

  console.log(profile);
  console.log(tweets);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-xl-block col-lg-1"></div>
          <div className="col-2 border-end">Nabvar side</div>
          <div className="col-9 col-lg-5 px-0">
            <div className="container px-0" id="main-cont">
              <div className="bg-primary" id="blue div">
                <img src="" alt="portada" id="portada" />
                <div className="white-div" id="white-div">
                  <img
                    src=""
                    alt="foto de perfil"
                    id="photo-profile"
                    className="me-3"
                  />
                </div>
                <div className="mb-3">
                  <h5>
                    {profile.firstname} {profile.lastname}
                  </h5>
                  <p className="grey-letter">@{profile.username}</p>
                  <p>{profile.bio}</p>
                </div>
              </div>
              {/* ////////Acá viene el If //////////// */}

              {/* //////////////////// */}
              <div id="follows" class="grey-letter">
                <span class="number">{profile.followers.length}</span>{" "}
                <a href="followers/<%=user.username%>">Followers</a>
                <span class="number">{profile.following.length}</span>{" "}
                <a href="following/<%=user.username%>">Following</a>
              </div>

              {/* ////////Tweet //////////// */}
              <Tweet />
              {/* //////////////////// */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
