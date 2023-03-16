import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { createToken } from "../../reducers/tokenReducer";

function Navbar() {
	const token = useSelector((state) => state.token);
	const dispatch = useDispatch();

	return (
		<div id="main-navbar">
			<nav className="">
				<ul id="nav-icons" className="mt-0">
					<li id="logo-twitter" className="mt-2 mt-lg-0">
						<img src="../img/logoHome.svg" alt="" />
					</li>
					<a href="/">
						<li className="fs-6">
							<img src="../img/homeIcon.svg" alt="" />
							<span className="fs-6 d-md-none d-lg-inline-block">
								Home
							</span>
						</li>
					</a>
					<li>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
						>
							<g>
								<path d="M10.64 3.157l-.36 3.593h4.99l.38-3.892 2.99.299-.36 3.593h2.97v2.5h-3.22l-.55 5.5h2.77v2.5h-3.02l-.39 3.892-2.98-.299.36-3.593H9.23l-.39 3.892-2.98-.299.36-3.593H2.75v-2.5h3.72l.55-5.5H3.75v-2.5h3.52l.38-3.892 2.99.299zm3.83 11.593l.55-5.5h-4.99l-.55 5.5h4.99z"></path>
							</g>
						</svg>
						<span className="fs-6 d-md-none d-lg-inline-block">
							Explore
						</span>
					</li>
					<li>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
						>
							<g>
								<path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path>
							</g>
						</svg>
						<span className="d-md-none d-lg-inline-block fs-6">
							Notifications
						</span>
					</li>
					<li>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
						>
							<g>
								<path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path>
							</g>
						</svg>
						<span className="d-md-none d-lg-inline-block fs-6">
							Messages
						</span>
					</li>
					<li>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
						>
							<g>
								<path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
							</g>
						</svg>
						<span className="d-md-none d-lg-inline-block fs-6">
							Bookmarks
						</span>
					</li>
					<li>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
						>
							<g>
								<path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path>
							</g>
						</svg>
						<span className="d-md-none d-lg-inline-block fs-6">
							Lists
						</span>
					</li>
					<a href="/usuarios/<%=req.user.username%>">
						<li>
							<svg
								viewBox="0 0 24 24"
								aria-hidden="true"
								className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
							>
								<g>
									<path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
								</g>
							</svg>
							<span className="d-md-none d-lg-inline-block fs-6">
								Profile
							</span>
						</li>
					</a>
					<li>
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"
						>
							<g>
								<path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
							</g>
						</svg>
						<span className="d-md-none d-lg-inline-block fs-6">
							More
						</span>
					</li>
					<li>
						<a id="tweet-btn" className="btn text-white" href="/">
							Tweet
						</a>
					</li>
				</ul>
			</nav>
			<a
				onClick={() => {
					dispatch(createToken(""));
				}}
				id="logout-btn"
				className="btn btn-danger rounded-pill mt-1 text-white"
				href="/"
			>
				Log Out
			</a>
		</div>
	);
}

export default Navbar;
