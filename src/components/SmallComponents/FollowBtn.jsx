import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FollowBtn.css";

function FollowBtn({ user, updateFollowingList }) {
  const [loggedUser, setLoggedUser] = useState([]);
  const token = useSelector((state) => state.token);
  const [isFollowing, setIsFollowing] = useState(false);
  
  useEffect(() => {
    const getLoggedUser = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: "http://localhost:8000",
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
    updateFollowingList()
    setIsFollowing(true);
    
  };

  const unFollowUser = async () => {
    const response = await axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "delete",
      url: `http://localhost:8000/users/${user._id}/unfollow`,
    });

    setIsFollowing(false);
    updateFollowingList()
    
    
  };

  if (!isFollowing) {
    return (
      <button
        onClick= {()=>followUser()}
        className="btn ms-auto me-1 rounded-pill btn-skyblue"
      >
        Follow
      </button>
    );
  } else {
    return (
      <button
        onClick={() => unFollowUser()}
        className="btn ms-auto me-1 rounded-pill unfollow-btn"
      >
        Unfollow
      </button>
    );
  }
}

export default FollowBtn;