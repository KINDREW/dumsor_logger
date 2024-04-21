import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const LoggedTimes = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await api.get("/logs/logs");
        setLogs(res.data);
      } catch (err) {
        console.error("Error fetching logs:", err.response.data.message);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div>
      <h2>Logged Times</h2>
      <ul>
        {logs.map((log) => (
          <li key={log._id}>
            <div>Start Time: {new Date(log.startTime).toLocaleString()}</div>
            <div>
              End Time:{" "}
              {log.endTime ? new Date(log.endTime).toLocaleString() : "N/A"}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoggedTimes;
