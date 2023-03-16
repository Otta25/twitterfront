import "./SideCards.css";
import UserToFollow from "../SmallComponents/UserToFollow";
import { useEffect, useState } from "react";
import axios from "axios";

function WhoToFollow() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const response = await axios({
				method: "get",
				url: "http://localhost:8000/users/",
			});
			setUsers(response.data.user);
		};
		getUsers();
	}, []);

	return (
		<div className="card border-0 px-2 card-css">
			<ul className="list-group list-group-flush container">
				<li className="p-3">
					<h4 className="fw-bolder">Who to follow</h4>
				</li>
				{users.slice(5).map((user) => (
					<UserToFollow user={user} />
				))}
			</ul>
		</div>
	);
}

export default WhoToFollow;
