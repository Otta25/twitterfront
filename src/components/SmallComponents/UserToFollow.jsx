import { Link, useNavigate } from "react-router-dom";
import FollowBtn from "../SmallComponents/FollowBtn";

function UserToFollow({ user, update }) {
  const updateProfile = () => {
    update();
  };

  return (
    <li className="pb-2 ps-2">
      <div className="container">
        <div className="d-flex align-items-center row">
          <div className="col-2 pe-5">
            <img className="tiny-pic-profile" src={user.photoProfile} alt="" />
          </div>
          <div className="col-5 ">
            <Link
              to={"/users/" + user._id}
              href={"/users/" + user.username}
              className="text-truncate fw-bold text-dark text-decoration-none"
              onClick={updateProfile}
            >
              {user.username}
            </Link>

            <p className="mb-0 font-grey fs-6 text-truncate">
              @{user.username}
            </p>
          </div>

          <div className="col-4 ps-1">
            <FollowBtn user={user} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default UserToFollow;
