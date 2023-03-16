import "./SideCards.css";

function WhoToFollow() {
	return (
		<div className="card border-0 px-2 card-css">
			<ul className="list-group list-group-flush container">
				<li className="p-3">
					<h4 className="fw-bolder">Who to follow</h4>
				</li>
				{/* for */}
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

							<div className="col-4 ps-1">
								{/* <% const userFollowedByLoggedUser = req.user.following.includes(user._id);%> 
              <% if (req.user.id !== user.id) { %>
                <% if (!userFollowedByLoggedUser) { %> */}
								<form
									id="follow-form"
									action="/usuarios/followers/follow"
									method="POST"
								>
									<input
										type="hidden"
										name="userId"
										value="<%= user._id %>"
									/>
									<button
										type="submit"
										className="btn ms-auto me-1 rounded-pill btn-skyblue"
									>
										Follow
									</button>
								</form>
								{/* <% } else { %>
                  <form id="follow-form" action="/usuarios/followers/unfollow" method="POST">
                    <input type="hidden" name="userId" value="<%= user._id %>">
                    <button type="submit" className="btn ms-auto me-1 rounded-pill unfollow-btn">Unfollow</button>
                  </form> */}
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default WhoToFollow;
