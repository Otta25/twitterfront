import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createToken } from "../reducers/tokenReducer";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [inputUser, setInputUser] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/login",
      data: {
        username: inputUser,
        password: inputPassword,
      },
    });
    dispatch(createToken(response.data.token));
    navigate("/");
  };

  return (
    <>
      <h2>este es la login</h2>
      <div className="login">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="user">user</label>
            <input
              type="text"
              name="user"
              id="user"
              value={inputUser}
              onChange={(event) => setInputUser(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              id="password"
              value={inputPassword}
              onChange={(event) => setInputPassword(event.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
