import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogReport = () => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(()=>{
    if (token == null) {
      navigate("/auth");
      return;
    }
  })

  return (
    <>
      <h1>Log Report</h1>
    </>
  );
};

export default LogReport;
