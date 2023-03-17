import Style from "../WriteTweet/WriteTweet.module.css";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

function WriteTweet() {
  const token = useSelector((state) => state.token);
  const [content, setContent] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      url: "http://localhost:8000/tweets",
      data: {
        content: content,
      },
    });
  };

  console.log(content);

  return (
    <div class="border-bottom p-3">
      <div class="mb-3">
        <label
          for="exampleFormControlInput1"
          class="form-label principal-text pt-3 ps-2"
        >
          Home
        </label>
      </div>
      <form action="/" method="get" onSubmit={handleSubmit}>
        <div class="text-center">
          <div class="row">
            <div class="col-2 d-none d-sm-inline-block">
              <a href="/usuarios/<%=req.user.username%>">
                <img class="ms-2 tiny-pic-profile " alt="" srcset="" />
              </a>
            </div>
            <div class="col-10">
              <div class="mb-3">
                <textarea
                  class="form-control border-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="What’s happening?"
                  name="content"
                  onChange={(event) => setContent(event.target.value)}
                  value={content}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn btn-skyblue me-2 rounded-pill px-3" type="submit">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteTweet;
