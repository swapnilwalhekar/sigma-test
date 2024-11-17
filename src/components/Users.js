import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:5050/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(response.data);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:5050/api/users",
      { name, email, password, roleName: role },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchUsers();
  };

  return (
    <div className="container mt-5">
      <Header />
      <h2>Users</h2>
      <form onSubmit={handleAddUser}>
        <div className="mb-3">
          <input
            type="text"
            className="inputBox"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="inputBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="inputBox"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <select
            value={role}
            className="inputBox"
            onChange={(e) => {
              setRole(e.target.value);
            }}
            required
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">
          Add User
        </button>
      </form>

      <h3 className="mt-5 mb-3">User List</h3>
      <div className="card">
        <ul className="list-group list-group-flush">
          {users.map((user) => (
            <li
              key={user._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>{user.name}</strong> <br />
                <span className="text-muted">{user.email}</span>
              </div>
              <span className="badge bg-primary rounded-pill">
                {user?.role?.name || "No Role"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
