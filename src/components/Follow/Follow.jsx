import Style from '../Follow/Follow.module.css'


function follow() {
	return (
		<div className="p-2 w-100">
			<div className="my-3">
				<div className="col">
					<div className="d-flex align-items-center ms-1">
						<img
							className="me-3 p-1"
							src="/img/avatarSmall.svg"
							alt=""
							srcset=""
						/>
						<div>
							<p className="mb-0 fw-bold">follow name</p>
							<p className="mb-0 font-grey">@followusername</p>
						</div>
						<div className="ms-auto me-2">
							<form
								id="follow-form"
								action="/usuarios/following/unfollow"
								method="POST"
							>
								<input
									type="hidden"
									name="userId"
									value="<%= follow._id %>"
								/>
								<button
									type="submit"
									className="btn ms-auto me-1 rounded-pill btn-skyblue"
								>
									Unfollow
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
