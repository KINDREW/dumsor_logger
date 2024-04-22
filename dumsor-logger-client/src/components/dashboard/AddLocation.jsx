import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import axios from "axios";
import { Link } from "react-router-dom";

const AddLocation = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/location/addlocation", { name });
      navigate("/logs");
    } catch (error) {
      console.error(error);
      // Show error message
    }
  };

  return (
    <div>
      <h2>Add Location</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Location</button>
      </form>
      <Link to={"/logs"}>Go Home</Link>
    </div>
  );
};

export default AddLocation;
