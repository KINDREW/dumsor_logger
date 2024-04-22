import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { Link } from "react-router-dom";

const Location = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await api.get("/location/location");
        console.log(res);
        setLocations(res.data);
      } catch (err) {
        console.error("Error fetching Locations:", err.response.data.message);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div>
      <h2>Listed Locations</h2>
      <ul>
        {locations.map((location) => (
          <li key={location._id}>
            <div>{location.name}</div>
          </li>
        ))}
      </ul>
      <p>
        Add a new location? <Link to={"/location/add"}>Add location</Link>
      </p>
      <Link to={"/logs"}>Go Home</Link>
    </div>
  );
};

export default Location;
