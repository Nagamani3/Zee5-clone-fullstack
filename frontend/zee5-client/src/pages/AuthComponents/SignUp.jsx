import React, { useState } from "react";
import "./Auth.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/Axios";

const SignUp = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    loading: false,
  });
  let { username, email, role, password, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = {
        username: username,
        email: email,
        password: password,
        // role: role,
      };
      let data = await axiosInstance.post("/signup", payload);

      console.log(data);
      let { token } = data.data;
      // console.log(token);
      localStorage.setItem("Signup-Token", token);
      console.log("PayloadData:", data);
      //  window.location.assign("/signin");
      navigate("/signin");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="authSection">
      <article>
        <div className="authBlock">
          <h1>Create a new account</h1>
          <p>
            Create an account to continue enjoying <br /> uninterrupted video
            and personalised <br /> experience
          </p>
          <div className="btn1">
            <button>
              <span>
                <FcGoogle />
              </span>

              <span>Sign Up</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                placeholder="Enter your Name"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Enter your Email"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleChange}
              />
            </div>

            <p>
              By Proceeding you agree to our <a href="">Terms of Services</a>
              &nbsp;
              <br />
              <a href="">Privacy Policy</a>.
            </p>
            <div className="btn2">
              <button onSubmit={handleSubmit}>Register</button>
            </div>
          </form>

          <p>
            Already registered?&nbsp;&nbsp;<a href="/signin">Login</a>
          </p>
        </div>
      </article>
    </section>
  );
};

export default SignUp;
