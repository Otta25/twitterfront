import React from "react";
import FollowBtn from "../SmallComponents/FollowBtn";

function ToFollow({ user , updateFollowingList }) {


  
  return (
    <div className="p-2 container w-100">
      <div className="my-3">
        <div className="col">
          <div className="d-flex align-items-center ms-1">
            <img className="tiny-pic-profile me-3"src={user.photoProfile} alt="" srcSet="" />
            <div>
              <p className="mb-0 fw-bold">{user.username}</p>
              <p className="mb-0 font-grey">@{user.username}</p>
            </div>
            <div className="ms-auto me-2">
                {<FollowBtn user={user} updateFollowingList={updateFollowingList} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToFollow;
