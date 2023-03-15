import Style from "./SideCards.module.css";

function WhatsHappening() {
	return (
		<div class="card border-0 px-2 card-css">
			<ul class="list-group list-group-flush container">
				<li class="p-2">
					<h4 class="fw-bolder">What’s happening</h4>
				</li>
				<li class="pb-2 ps-2">
					<div class="d-flex align-items-center ms-1">
						<div>
							<p class="mb-0 fontsize-grey">
								Programming · Trending
							</p>
							<p class="mb-0 fw-bold">#MongoVsSequelize</p>
							<p class="mb-0 fontsize-grey">97.5K Tweets</p>
						</div>
					</div>
				</li>
				<li class="pb-2 ps-2">
					<div class="d-flex align-items-center ms-1">
						<div>
							<p class="mb-0 fontsize-grey">
								Entertainment · Trending
							</p>
							<p class="mb-0 fw-bold">#StarWars</p>
							<p class="mb-0 fontsize-grey">97.5K Tweets</p>
						</div>
					</div>
				</li>
				<li class="pb-2 ps-2">
					<div class="d-flex align-items-center ms-1">
						<div>
							<p class="mb-0 fontsize-grey">News · Trending</p>
							<p class="mb-0 fw-bold">#LifeInMars</p>
							<p class="mb-0 fontsize-grey">97.5K Tweets</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default WhatsHappening;
