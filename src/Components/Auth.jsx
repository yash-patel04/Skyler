import { useEffect, useState } from "react";
import "../CSS/Auth.css";
import logo from "../assets/Images/F-logo.png";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Auth = () => {
  let [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/client/home");
    }
  },[]);

  const validateInputs = () => {
    const newErrors = { username: "", password: "" };
    if (!data.username) newErrors.username = "Enter Username";
    if (!data.password) newErrors.password = "Enter Password";
    setError(newErrors);
    return !(newErrors.username || newErrors.password);
  };

  function checkLogin(data) {
    if (!validateInputs()) return;

    // API call to authenticate user
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
        } else if (res.errors) {
          setError({ username: "", password: "" });
          setTimeout(() => {
            setError({
              username: res.errors.username || "",
              password: res.errors.password || "",
            });
          }, 0);
        } else {
          setError({ username: "", password: res.message || "Login failed" });
        }
      })
      .catch((err) => {
        console.error("Error during fetch:", err.message);
        setError({ username: "", password: "Network error, please try again" });
      });
  }

  const handleInputChange = (field) => (e) => {
    setData({ ...data, [field]: e.target.value });
    if (error[field]) setError({ ...error, [field]: "" });
  };

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
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              value={data.username}
              onChange={handleInputChange("username")}
            />
            <div className="error-container">
              {error.username && (
                <div className={`error ${error.username ? "visible" : ""}`}>
                  {error.username}
                </div>
              )}
            </div>
          </div>
          <label>Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={data.password}
              onChange={handleInputChange("password")}
            />
            <span
              type="button"
              className="eye-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
            <div className="error-container">
              {error.password && (
                <div className={`error ${error.password ? "visible" : ""}`}>
                  {error.password}
                </div>
              )}
            </div>
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
