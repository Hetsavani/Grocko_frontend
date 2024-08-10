// src/Transport/TransportRequest.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const TransportRequest = () => {
  const [cropType, setCropType] = useState("");
  const [weight, setWeight] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/transport-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cropType,
          weight,
          pickupLocation,
          dropLocation,
        }),
      });

      if (response.ok) {
        // Redirect to dashboard or show success message
        navigate("/dashboard");
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (error) {
      setError("An error occurred");
    }
  };

  return (
    <div>
      <h2>Create Transport Request</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Crop Type:
          <input
            type="text"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Pickup Location:
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Drop Location:
          <input
            type="text"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default TransportRequest;
