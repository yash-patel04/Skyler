import { useEffect, useState } from "react";
import "../CSS/Auth.css";
import logo from "../assets/Images/F-logo.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Auth = () => {
  let [data, setData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/client/home");
    }
  }, []);

  function checkLogin(data) {
    fetch(`${import.meta.env.VITE_API}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          navigate("/client/home");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Error during fetch:", err.message);
      });
  }

  return (
    <div className="form-container">
      {/* Left Section */}
      <div className="left-section">
        <div className="left-content">
          <img alt="Skyler" className="logo" src={logo} />
          <div className="f-heading">Skyler</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={data.username}
              onChange={(e) => {
                setData({ ...data, username: e.target.value });
              }}
            />
          </div>
          <label>Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <span
              type="button"
              className="eye-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="button-group">
            <button
              type="button"
              className="login-btn"
              onClick={() => {
                checkLogin(data);
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Auth;
