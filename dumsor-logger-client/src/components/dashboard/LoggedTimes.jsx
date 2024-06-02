import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../utils/api";

const LoggedTimes = () => {
  const { id } = useParams();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogsByLocation = async () => {
      try {
        const res = await api.get(`/logs/${id}`);
        setLogs(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching logs:", err.response.data.message);
      }
    };
    fetchLogsByLocation();
  }, [id]);

  return (
    <div>
      <h2>Logs for Location {id}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {logs.map((log) => (
            <li key={log._id}>
              Start Time: {log.startTime}, End Time: {log.endTime}
            </li>
          ))}
        </ul>
      )}
      <Link to={"/logs"}>Go Back to All Logs</Link>
    </div>
  );
};

export default LoggedTimes;
