import FollowBtn from "../SmallComponents/FollowBtn";

function UserToFollow({ user }) {
	return (
		<li className="pb-2 ps-2">
			<div className="container">
				<div className="d-flex align-items-center row">
					<div className="col-2 pe-5">
						<img
							className="tiny-pic-profile"
							src="<%=user.photoProfile%>"
							alt=""
						/>
					</div>
					<div className="col-5">
						<a
							href="/usuarios/<%=user.username%>"
							className="d-block text-truncate mb-0 fw-bold text-dark"
						>
							User Full Name
						</a>
						<p className="mb-0 font-grey fs-6 text-truncate">
							@username
						</p>
					</div>
					<FollowBtn user={user} />
					<div className="col-4 ps-1"></div>
				</div>
			</div>
		</li>
	);
}

export default UserToFollow;
