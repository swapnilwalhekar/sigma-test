import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:5050/api/users", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUsers(response.data);
    console.log(response.data);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5050/api/users",
      { name, email, password, role },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchUsers();
  };

  return (
    <div className="container mt-5">
      <h2>Users</h2>
      <form onSubmit={handleAddUser}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Role</label>
          <input
            type="text"
            className="form-control"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add User
        </button>
      </form>

      <h3 className="mt-5">User List</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user._id} className="list-group-item">
            {user.name} - {user.email} - {user.role.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
