import React, { useState } from "react";
import { Axios } from "axios";

const SignUp = () => {
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    loading: false,
  });
  let { username, email, password, role, loading } = state;

  let handaleChange = e => {
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
        role: role,
      };
      let data = await Axios.post("/api/auth/signup", payload);
      window.location.assign("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={handaleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={handaleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Select Role</label>
          <select name="role" id="role" value={role} onChange={handaleChange}>
            <option value="user">user</option>
            <option value="publisher">Publisher</option>
          </select>
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default SignUp;
