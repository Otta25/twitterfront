import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function FollowBtn({ user }) {
  let userFollowedByLoggedUser = false;
  const [loggedUser, setLoggedUser] = useState([]);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const getLoggedUser = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: "http://localhost:8000",
      });
      console.log(response.data.following);
      setLoggedUser(response.data);
      console.log(user);
    };
    getLoggedUser();
  }, []);

  useEffect(() => {
    if (typeof loggedUser.following === "Array") {
      userFollowedByLoggedUser = loggedUser.following.includes(user);
    } 
  }, [loggedUser]);


  if (!userFollowedByLoggedUser) {
    return (
      <form id="follow-form" action="/users/follow" method="POST">
        <input type="hidden" name="userId" value={`${user._id}`} />
        <button type="submit" class="btn ms-auto me-1 rounded-pill btn-skyblue">
          Follow
        </button>
      </form>
    );
  } else {
    return (
      <form id="follow-form" action="/users/unfollow" method="POST">
        <input type="hidden" name="userId" value={`${user._id}`} />
        <button
          type="submit"
          class="btn ms-auto me-1 rounded-pill unfollow-btn"
        >
          Unfollow
        </button>
      </form>
    );
  }
}

export default FollowBtn;
