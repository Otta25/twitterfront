import React from "react";
import FollowBtn from "../SmallComponents/FollowBtn";
import { Link, useNavigate } from "react-router-dom";

function ToFollow({ user, updateFollowingList }) {
  const updateFollowings = () => {
    updateFollowingList();
  };

  return (
    <div class="p-2 container w-100">
      <div class="my-3">
        <div class="col">
          <div class="d-flex align-items-center ms-1">
            <img
              className="tiny-pic-profile me-3"
              src={user.photoProfile}
              alt=""
              srcset=""
            />
            <div>
              <Link
                to={"/users/" + user._id}
                href={"/users/" + user.username}
                className="text-truncate fw-bold small text-dark text-decoration-none"
              >
                {user.username}
              </Link>
              <p className="mb-0 font-grey">@{user.username}</p>
            </div>
            <div class="ms-auto me-2">
              {<FollowBtn user={user} updateFollowingList={updateFollowings} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToFollow;
