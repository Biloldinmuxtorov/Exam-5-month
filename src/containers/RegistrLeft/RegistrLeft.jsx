import { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import request from "../../assets/http";

import "./RegistrLeft.scss";
import axios from "axios";

const RegistrLeft = () => {
  const history = useHistory();

  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: gmail,
      password: password,
    };

    axios
      .post("https://reqres.in/api/login", payload)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("sessionToken", token);
        history.push("/");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.log(
            "Server responded with an error status code:",
            error.response.status
          );
          console.log("Error response data:", error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received from the server");
        } else {
          // Something else happened in making the request
          console.log(
            "Error occurred while making the request:",
            error.message
          );
        }
      });
  };

  return (
    <div className="RegistrLeft">
      <div className="register-left-inner">
        <h4>Бесплатная регистрация</h4>

        <form action="" id="form">
          <input
            onChange={(e) => {
              setGmail(e.target.value);
            }}
            type="email"
            name="email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Password"
          />

          <button className="item-link" onClick={handleSubmit}>
            Send
          </button>
        </form>

        <div className="ili">
          <span></span>
          <p>или</p>
          <span></span>
        </div>

        <Link to="#">
          Войдите в систему, если у вас уже есть
          <br />
          аккаунт kivi.uz
        </Link>
      </div>
    </div>
  );
};

export default RegistrLeft;
