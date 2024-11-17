import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateComp from "./components/PrivateComponent";
import SignUp from "./components/SignUp";
import Users from "./components/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateComp />}>
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
