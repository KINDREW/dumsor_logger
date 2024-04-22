import React, { useState } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogTime = () => {
  const [timeData, setTimeData] = useState({
    startTime: "",
    endTime: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTimeData({ ...timeData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/logs/log", timeData);
      setTimeData({
        startTime: "",
        endTime: "",
      });
      navigate("/logs");
    } catch (err) {
      console.error("Error logging time:", err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Dumsor Logger</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          name="startTime"
          value={timeData.startTime}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="endTime"
          value={timeData.endTime}
          onChange={handleChange}
        />
        <button type="submit">Log Time</button>
      </form>
      <Link to={"/logs"}>Go Home</Link>
    </div>
  );
};

export default LogTime;
