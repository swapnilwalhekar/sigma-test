import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleName, setRoleName] = useState("user");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5050/api/auth/signup",
        {
          name,
          email,
          password,
          roleName,
        }
      );

      alert("SignUp successful");
      navigate("/");
    } catch (err) {
      alert(err?.response?.data?.message || "Error");
    }
  };

  return (
    <div className="main-register">
      <div className="register">
        <p className="log-head">SignUp</p>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              className="inputBox"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              className="inputBox"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              className="inputBox"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>

          <div class="form-group">
            <select
              value={roleName}
              className="inputBox"
              onChange={(e) => {
                setRoleName(e.target.value);
              }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className="appButton">
            SignUp
          </button>
        </form>

        <div>
          <Link to={"/"}>Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
