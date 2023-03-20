import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FollowBtn.css";

function FollowBtn({ user, updateFollowingList }) {
  const [loggedUser, setLoggedUser] = useState([]);
  const token = useSelector((state) => state.token);
  const [isFollowing, setIsFollowing] = useState();

  useEffect(() => {
    const getLoggedUser = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: `${process.env.REACT_APP_API_URL}`,
      });

      setLoggedUser(response.data);
    };
    getLoggedUser();
  }, []);

  useEffect(() => {
    if (Array.isArray(loggedUser.following)) {
      setIsFollowing(loggedUser.following.includes(user._id));
    }
  }, [loggedUser]);

  const followUser = async () => {
    const response = await axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      url: `http://localhost:8000/users/${user._id}/follow`,
    });

    updateFollowingList();
    setIsFollowing(true);
  };

  const unFollowUser = async () => {
    const response = await axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      url: `http://localhost:8000/users/${user._id}/unfollow`,
    });

    updateFollowingList();
    setIsFollowing(false);
  };

  if (!isFollowing) {
    return (
      <button
        onClick={() => followUser()}
        className="btn rounded-pill btn-skyblue position-relative end-0"
      >
        Follow
      </button>
    );
  } else {
    return (
      <button
        onClick={() => unFollowUser()}
        className="btn rounded-pill unfollow-btn position-relative end-0"
      >
        Unfollow
      </button>
    );
  }
}

export default FollowBtn;
