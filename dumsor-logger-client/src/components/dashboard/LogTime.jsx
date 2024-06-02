import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LogTime = () => {
  const [timeData, setTimeData] = useState({
    startTime: "",
    endTime: "",
    location: "", // Add location field to timeData state
  });
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);

  const handleChange = (e) => {
    setTimeData({ ...timeData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await api.get("/location/location");
        setLocations(res.data);
      } catch (err) {
        console.error("Error fetching Locations:", err.response.data.message);
      }
    };
    fetchLocations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/logs/log", timeData);
      setTimeData({
        startTime: "",
        endTime: "",
        location: "", // Reset location after submission
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
        <select
          name="location" // Set the name attribute
          value={timeData.location} // Set the value attribute
          onChange={handleChange} // Set the onChange event handler
        >
          <option value="">Select a location</option>
          {locations.map((location) => (
            <option key={location._id} value={location._id}>
              {location.name}
            </option>
          ))}
        </select>
        <button type="submit">Log Time</button>
      </form>
      <Link to={"/logs"}>Go Home</Link>
    </div>
  );
};

export default LogTime;
