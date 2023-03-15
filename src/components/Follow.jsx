function follow() {
	return (
		<div class="p-2 w-100">
			<div class="my-3">
				<div class="col">
					<div class="d-flex align-items-center ms-1">
						<img
							class="me-3 p-1"
							src="/img/avatarSmall.svg"
							alt=""
							srcset=""
						/>
						<div>
							<p class="mb-0 fw-bold">follow name</p>
							<p class="mb-0 font-grey">@followusername</p>
						</div>
						<div class="ms-auto me-2">
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
									class="btn ms-auto me-1 rounded-pill btn-skyblue"
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
