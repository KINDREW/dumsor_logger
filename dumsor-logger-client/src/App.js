import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import LogTime from "./components/dashboard/LogTime";
import LoggedTimes from "./components/dashboard/LoggedTimes";
import Location from "./components/dashboard/Locations";
import AddLocation from "./components/dashboard/AddLocation";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

          <Route path="/dashboard" element={<LogTime />} />
          <Route path="/logs/location/:id" element={<LoggedTimes />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/add" element={<AddLocation />} />

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
