import React from "react";
import FollowBtn from "../SmallComponents/FollowBtn";

function ToFollow({ user , updateFollowingList }) {


  
  return (
    <div class="p-2 container w-100">
      <div class="my-3">
        <div class="col">
          <div class="d-flex align-items-center ms-1">
            <img className="tiny-pic-profile me-3"src={user.photoProfile} alt="" srcset="" />
            <div>
              <p className="mb-0 fw-bold">{user.username}</p>
              <p className="mb-0 font-grey">@{user.username}</p>
            </div>
            <div class="ms-auto me-2">
                {<FollowBtn user={user} updateFollowingList={updateFollowingList} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToFollow;
