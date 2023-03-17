import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import Tweet from "../Tweet/Tweet";
import Navbar from "../Navbar/Navbar";
import WhoToFollow from "../SideCards/WhoToFollow";
import WhatsHappening from "../SideCards/WhatsHappening";
import WriteTweet from "../WriteTweet/WriteTweet";
import ToFollow from "./ToFollow";



function Following() {
  const token = useSelector((state) => state.token);
	const { id } = useParams();
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
	const [following, setFollowing] = React.useState([]);

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
  }, []);;
  

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
            <h2 className="container">Perfil</h2>
            <p className="container">@perfil</p>
          </div>
          <div class="container text-center">
              <div class="row">
                <div class="col">
                <NavLink
                    to={`/users/${id}/followers`}
                    state={{ token }}
                    className=" standard-item"
                  >
                    Followers
                </NavLink>
                </div>
                <div class="col">
                <NavLink
                    to={`/users/${id}/following`}
                    state={{ token }}
                    className="standard-item focused-item"
                  >
                    Following
                </NavLink>
                </div>
                
              </div>
            </div>

           {following.map((user) => (
            <ToFollow user={user}></ToFollow>
             ))}
        	</div>
          <div className="d-none d-lg-block col-lg-2 border-start">
            <WhatsHappening /> <br /> <WhoToFollow />
          </div>
          <div className="d-none d-xl-block col-2"></div>
        </div>
      </div>
    </>
  );
}

export default Following;
