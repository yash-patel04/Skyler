import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  let [data, setData] = useState({ UserName: "", Password: "" });
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      navigate("/client/home");
    }
  }, []);
  return (
    <>
      <table>
        <tr>
          <td>Enter UserName:</td>
          <td>
            <input
              type="text"
              value={data.UserName}
              onChange={(e) => {
                setData({ ...data, UserName: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Enter Password:</td>
          <td>
            <input
              type="text"
              value={data.Password}
              onChange={(e) => {
                setData({ ...data, Password: e.target.value });
              }}
            />
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <button
              className="btn btn-primary"
              onClick={() => {
                fetch("http://localhost:4000/login", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: { "Content-Type": "application/json" },
                })
                  .then((res) => res.json())
                  .then((res) => {
                    console.log(res);
                    if (res.success) {
                      // console.log("Login successful");
                      localStorage.setItem("token", res.token);
                      navigate("/client/home");
                    } else {
                      alert("Invalid credentials");
                    }
                  })
                  .catch((err) => {
                    console.error("Error during fetch:", err);
                  });
              }}
            >
              Login
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Auth;

// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();
//   useEffect(() => {
//     if(token == null){
//         navigate("/")
//         return
//     }
//   },[])
//     return (
//       <div>Home</div>
//     )

// }

// export default Home;
