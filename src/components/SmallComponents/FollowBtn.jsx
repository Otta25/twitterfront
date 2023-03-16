import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function FollowBtn({ user }) {
	const [loggedUser, setLoggedUser] = useState([]);
	const token = useSelector((state) => state.token);

	useEffect(() => {
		fetch('http://localhost:8000')
		.then(res => res.json())
		.then(data => setLoggedUser(data))
	// 	const getLoggedUser = async () => {
	// 		await axios({
	// 			headers: { Authorization: `Bearer ${token}` },
	// 			method: "get",
	// 			url: "http://localhost:8000",
	// 		}).then((response) => setLoggedUser(response.data));
	// 	};
	// 	getLoggedUser();
	// 	console.log(loggedUser);
	}, []);

 console.log(loggedUser)

	const userFollowedByLoggedUser = loggedUser.following.includes(user._id);

	if (loggedUser.id !== user._id) {
		if (!userFollowedByLoggedUser) {
			return (
				<form id="follow-form" action="/users/follow" method="POST">
					<input type="hidden" name="userId" value={`${user._id}`} />
					<button
						type="submit"
						class="btn ms-auto me-1 rounded-pill btn-skyblue"
					>
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
}

export default FollowBtn;
