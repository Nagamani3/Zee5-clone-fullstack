import React, { useState } from "react";
import "./Auth.css";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "../../Axios/Axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: false,
  });
  let { email, password, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = {
        email,
        password,
      };
      let data = await axios.post("/signin", payload);
      console.log(data);
      let { token } = data.data;
      // console.log(token);
      localStorage.setItem("Signin-Token", token);
      console.log("PayloadData:", data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="authSection">
      <article>
        <div className="authBlock">
          <h1>Login to ZEE5</h1>
          <p>
            Login to continue enjoying uninterrupted video and
            <br /> personalised experience.
          </p>
          <div className="iconBlock">
            <span>
              <BsApple />
            </span>
            <span>
              <FcGoogle />
            </span>
            <span>
              <BsFacebook />
            </span>
            <span>
              <AiFillTwitterCircle />
            </span>
          </div>
          <div className="orBlock">
            <span>or</span>

            {/* <div className="line" ></div> */}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter yor email"
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
            </div>

            <p>
              <a href="">Forget Password ?</a>
            </p>
            <div className="btn2">
              <button>Log In</button>
            </div>
            <p>
              New to ZEE5?<Link to="/register">&nbsp;&nbsp;Register</Link>
            </p>
          </form>
        </div>
      </article>
    </section>
  );
};

export default Login;
