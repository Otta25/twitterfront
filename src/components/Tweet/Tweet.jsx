import Style from "../Tweet/Tweet.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./Tweet.css";
import { Link } from "react-router-dom";

function Tweet({ tweet, user }) {
  const token = useSelector((state) => state.token);
  const [likes, setLikes] = useState(tweet.likes);
  const [liked, setLiked] = useState(likes.includes(user));
  const [redHeart, setRedHeart] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  console.log(userData.id);
  const handleLike = async () => {
    setRedHeart(!redHeart);
    if (liked) {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "delete",
        url: `http://localhost:8000/tweets/${tweet._id}/likes`,
      });
      setLikes(response.data.likes);
      setLiked(false);
    } else {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "post",
        url: `http://localhost:8000/tweets/${tweet._id}/likes`,
      });
      setLikes(response.data.likes);
      setLiked(true);
    }
  };

  const handleDelete = async () => {
    await axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "delete",
      url: `http://localhost:8000/tweets/borrar/${tweet._id}`,
    });
  };

  return (
    <div className="border-bottom border-top w-100">
      <div className="my-3">
        <div className="container">
          <div className="row g-0">
            <div className="col-2 g-0" id="profile-tweet-pic">
              <div className="d-flex justify-content-center">
                <img
                  className="tiny-pic-profile"
                  src={`${user.photoProfile}`}
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div class="col">
              <h5 class="inline-b fw-semibold mb-1 me-1">
                <Link
                  to={"/users/" + user._id}
                  href={"/users/" + user.username}
                  className="d-block text-truncate mb-0 fw-bold text-dark text-decoration-none"
                >
                  {user.firstname} {user.lastname}
                </Link>
              </h5>
              <p class="inline-b font-grey mb-1">@{user.username}</p>
              <span>•</span>
              <p class="inline-b font-grey mb-1"> ago</p>
              <p class="card-text">{tweet.content}</p>
              <div class="d-flex justify-content-between">
                <div>
                  <ul id="tweet-icon-list">
                    <li id="like-icon">
                      <div
                        onClick={() => handleLike()}
                        className={redHeart ? Style.isActive : Style.heart}
                      ></div>
                      <span>{likes.length}</span>
                      <span></span>
                    </li>
                    <li className="tweet-icon">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                        </g>
                      </svg>
                    </li>
                    <li className="tweet-icon">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                        </g>
                      </svg>
                    </li>
                    <li className="tweet-icon">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi"
                      >
                        <g>
                          <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                        </g>
                      </svg>
                    </li>
                    <li className="tweet-icon" onClick={() => handleDelete()}>
                      {userData.id === user._id && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fill-rule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
