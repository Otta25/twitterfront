import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const token = useSelector((state) => state.token);
  console.log(token);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios({
        headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: "http://localhost:8000",
      });
      setUser(response.data);
    };
    getUser();
  }, []);

  /////////////////////////////////
  const [tweets, setTweets] = React.useState([]);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios({
        // headers: { Authorization: `Bearer ${token}` },
        method: "get",
        url: "http://localhost:8000/tweets",
      });
      setTweets(response.data);
    };
    getTweets();
  }, []);

  console.log(tweets);

  return (
    <>
      <h2>
        {user.firstname} {user.lastname}
      </h2>
      {tweets.map(
        (tweet) => tweet.author._id === user._id && <p>{tweet.content}</p>
      )}
    </>
  );
}

export default Home;
