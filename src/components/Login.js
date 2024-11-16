import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5050/api/auth/login", {
        email,
        password,
      });

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }

      alert("Login successfully.");

      navigate("/users");
    } catch (error) {
      setMessage("No User found, Please enter valid email and password.");
    }
  };

  return (
    <div className="main-register">
      <div className="register">
        <img src="../src/assets/main.png" alt="" />
        <p className="log-head">Login</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="inputBox"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            className="inputBox"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="appButton">
            Log In
          </button>
        </form>
        {message && <p className="error-message">{message}</p>}

        <div>
          <Link to={"/signup"}>Don't have an account? Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
