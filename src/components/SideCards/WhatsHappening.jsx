import "./SideCards.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function WhatsHappening() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, ease: "linear" }}
      className="card border-0 px-2 card-css"
    >
      <ul className="list-group list-group-flush container">
        <li className="p-2">
          <h4 className="fw-bolder">What’s happening</h4>
        </li>
        <li className="pb-2 ps-2">
          <div className="d-flex align-items-center ms-1">
            <div>
              <p className="mb-0 fontsize-grey">Programming · Trending</p>
              <p className="mb-0 fw-bold">#MongoVsSequelize</p>
              <p className="mb-0 fontsize-grey">97.5K Tweets</p>
            </div>
          </div>
        </li>
        <li className="pb-2 ps-2">
          <div className="d-flex align-items-center ms-1">
            <div>
              <p className="mb-0 fontsize-grey">Entertainment · Trending</p>
              <p className="mb-0 fw-bold">#StarWars</p>
              <p className="mb-0 fontsize-grey">97.5K Tweets</p>
            </div>
          </div>
        </li>
        <li className="pb-2 ps-2">
          <div className="d-flex align-items-center ms-1">
            <div>
              <p className="mb-0 fontsize-grey">News · Trending</p>
              <p className="mb-0 fw-bold">#LifeInMars</p>
              <p className="mb-0 fontsize-grey">97.5K Tweets</p>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
}

export default WhatsHappening;
