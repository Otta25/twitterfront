import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./FollowBtn.css";

function FollowBtn({ user }) {
  let userFollowedByLoggedUser = false;
  const [loggedUser, setLoggedUser] = useState([]);
  const token = useSelector((state) => state.token);
  const[isFollowing,setIsFollowing] = useState(false)

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
    if (typeof loggedUser.following === "Array") {
      userFollowedByLoggedUser = loggedUser.following.includes(user);
    }
  }, [loggedUser]);



function followUser(){
  const getFollowedUser = async () => {
    const response = await axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      url: `http://localhost:8000/users/${user._id}/follow`,
    });
  };
  getFollowedUser();
  setIsFollowing(true);
  
}


function unFollowUser(){
  const getUnFollowedUser = async () => {
    const response = await axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "delete",
      url: `http://localhost:8000/users/${user._id}/follow`,
    });
  };
  getUnFollowedUser();
  setIsFollowing(false);
}



  if (!isFollowing) {
    return (
        <button onClick={()=>followUser()} class="btn ms-auto me-1 rounded-pill btn-skyblue">
          Follow
        </button>
    );
  } else {
    return (
        <button
          onClick={()=>unFollowUser()}
          class="btn ms-auto me-1 rounded-pill unfollow-btn"
        >
          Unfollow
        </button>
    );
  }
}

export default FollowBtn;
