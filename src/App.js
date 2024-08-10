// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransportRequest from "./Transport/TransportRequest";
import Dashboard from "./FarmerDashboard/Layout/dashboard"; // Make sure you have this component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/transport-request" element={<TransportRequest />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
