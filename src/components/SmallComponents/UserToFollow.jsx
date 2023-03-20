import { Link, useNavigate } from "react-router-dom";
import FollowBtn from "../SmallComponents/FollowBtn";

function UserToFollow({ user, update, updateFollows }) {
  const updateProfile = () => {
    update();
  };
  const updateFollowings = () => {
    updateFollows();
  };

  return (
    <li className="pb-2 ps-2">
      <div className="container">
        <div className="d-flex align-items-center row">
          <div className="col-2 pe-5">
            <img className="tiny-pic-user" src={user.photoProfile} alt="" />
          </div>
          <div className="col-5 ps-0">
            <Link
              to={"/users/" + user._id}
              href={"/users/" + user.username}
              className="text-truncate fw-bold small text-dark text-decoration-none"
              onClick={updateProfile}
            >
              {user.username}
            </Link>

            <p className="mb-0 font-grey text-truncate small">
              @{user.username}
            </p>
          </div>

          <div className="col-4 ps-auto d-flex justify-content-end flex-grow-1">
            <FollowBtn user={user} updateFollowingList={updateFollowings} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default UserToFollow;
