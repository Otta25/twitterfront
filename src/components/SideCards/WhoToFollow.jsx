import "./SideCards.css";
import UserToFollow from "../SmallComponents/UserToFollow";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function WhoToFollow({ update }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios({
        method: "get",
        url: "http://localhost:8000/users",
      }).then((data) => setUsers(data.data.user));
    };
    getUsers();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, ease: "linear" }}
      className="card border-0 px-2 card-css"
    >
      <ul className="list-group list-group-flush container px-0">
        <li className="p-3">
          <h4 className="fw-bolder">Who to follow</h4>
        </li>
        {users.slice(0, 5).map((user) => (
          <UserToFollow user={user} update={update} updateFollows={update} />
        ))}
      </ul>
    </motion.div>
  );
}

export default WhoToFollow;
