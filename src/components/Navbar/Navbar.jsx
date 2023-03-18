import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { createToken } from "../../reducers/tokenReducer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Navbar() {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
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
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, ease: "linear" }}
      id="main-navbar"
    >
      <nav className="">
        <ul id="nav-icons" className="mt-0 pt-0">
          <li id="logo-twitter" className="mt-2 mt-lg-0">
            <svg
              width="28"
              height="23"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 2.72822C26.9703 3.18925 25.8642 3.50076 24.7013 3.64157C25.9012 2.91611 26.7988 1.77434 27.2268 0.429283C26.0995 1.10587 24.8658 1.58211 23.5791 1.8373C22.7139 0.903854 21.5679 0.285149 20.3191 0.0772448C19.0702 -0.130659 17.7884 0.0838706 16.6725 0.687527C15.5567 1.29118 14.6693 2.25019 14.1482 3.41566C13.627 4.58113 13.5012 5.88786 13.7904 7.13296C11.5062 7.01707 9.27163 6.41717 7.23174 5.37219C5.19185 4.32721 3.39221 2.8605 1.94962 1.06725C1.45635 1.92702 1.17273 2.92385 1.17273 3.98547C1.17218 4.94118 1.4051 5.88224 1.85081 6.72517C2.29653 7.5681 2.94127 8.28684 3.72783 8.8176C2.81563 8.78827 1.92356 8.53922 1.12587 8.09116V8.16592C1.12578 9.50634 1.58464 10.8055 2.42461 11.843C3.26457 12.8804 4.43389 13.5923 5.73417 13.8578C4.88796 14.0892 4.00077 14.1233 3.13961 13.9575C3.50647 15.1109 4.22108 16.1194 5.1834 16.842C6.14572 17.5646 7.30757 17.965 8.5063 17.9872C6.47139 19.6013 3.95829 20.4769 1.37127 20.473C0.913004 20.4732 0.455128 20.4461 0 20.392C2.62597 22.0981 5.68279 23.0035 8.80472 23C19.3729 23 25.1502 14.1556 25.1502 6.48502C25.1502 6.23581 25.144 5.98411 25.1329 5.73491C26.2567 4.91374 27.2267 3.89687 27.9975 2.73196L28 2.72822Z"
                fill="#1D9BF0"
              />
            </svg>
          </li>
          <Link to="/" className="text-decoration-none">
            <li className="fs-6">
              <svg
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4618 6.05463L12.5243 0.130386C12.3663 0.0448066 12.1896 0 12.0101 0C11.8307 0 11.654 0.0448066 11.496 0.130386L0.563955 6.05463C0.353129 6.17042 0.186589 6.35321 0.0904882 6.5743C-0.00561247 6.79539 -0.0258301 7.04226 0.0330102 7.27614C0.0918506 7.51002 0.226416 7.71765 0.415574 7.86644C0.604732 8.01523 0.837768 8.09675 1.07809 8.09818C1.25127 8.09818 1.42878 8.0569 1.59222 7.96781L2.38669 7.53759L4.10767 19.7598C4.34147 21.0787 5.5256 22 6.98681 22H17.0335C18.4947 22 19.6788 21.0787 19.9148 19.7316L21.6336 7.5365L22.4313 7.9689C22.6829 8.09588 22.9739 8.11946 23.2425 8.03464C23.5111 7.94981 23.7362 7.76325 23.87 7.51457C24.0038 7.26588 24.0358 6.97465 23.9592 6.70268C23.8825 6.43071 23.7033 6.19941 23.4596 6.05789L23.4618 6.05463ZM12.0101 14.8383C11.0772 14.8383 10.1824 14.4663 9.52273 13.8042C8.86302 13.142 8.49241 12.2439 8.49241 11.3075C8.49241 10.371 8.86302 9.47293 9.52273 8.81077C10.1824 8.1486 11.0772 7.7766 12.0101 7.7766C12.9431 7.7766 13.8379 8.1486 14.4976 8.81077C15.1573 9.47293 15.5279 10.371 15.5279 11.3075C15.5279 12.2439 15.1573 13.142 14.4976 13.8042C13.8379 14.4663 12.9431 14.8383 12.0101 14.8383Z"
                  fill="black"
                />
              </svg>
              <span className="fs-6 d-md-none d-lg-inline-block text-decoration-none">
                Home
              </span>
            </li>
          </Link>
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
            <span className="fs-6 d-md-none d-lg-inline-block">Explore</span>
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
            <span className="d-md-none d-lg-inline-block fs-6">Messages</span>
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
            <span className="d-md-none d-lg-inline-block fs-6">Bookmarks</span>
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
            <span className="d-md-none d-lg-inline-block fs-6">Lists</span>
          </li>
          <Link to={"/users/" + user._id} className="text-decoration-none">
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
              <span className="d-md-none d-lg-inline-block fs-6">Profile</span>
            </li>
          </Link>
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
            <span className="d-md-none d-lg-inline-block fs-6">More</span>
          </li>
          <li>
            <a id="tweet-btn" className="btn text-white" href="/">
              Tweet
            </a>
          </li>
        </ul>
      </nav>
      <Link
        onClick={() => {
          dispatch(createToken(""));
        }}
        id="logout-btn"
        className="btn btn-danger rounded-pill mt-1 text-white text-decoration-none"
        to="/"
      >
        Log Out
      </Link>
    </motion.div>
  );
}

export default Navbar;
