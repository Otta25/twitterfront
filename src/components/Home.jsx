import { useEffect, useState } from "react";
import axios from "axios";
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

  return (
    <>
      <h2>
        {user.firstname} {user.lastname}
      </h2>
      ;
    </>
  );
}

export default Home;
