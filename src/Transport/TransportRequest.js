import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TransportRequest = () => {
  const [cropType, setCropType] = useState("");
  const [weight, setWeight] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [error, setError] = useState("");
  const [requests, setRequests] = useState([]);
  const [editingRequest, setEditingRequest] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/transport-requests"
        );
        if (response.ok) {
          const data = await response.json();
          setRequests(data);
        } else {
          setError("Failed to fetch requests");
        }
      } catch (error) {
        setError("An error occurred");
        console.error(error); // Log the error for debugging
      }
    };

    fetchRequests();
  }, []);

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
        const newRequest = await response.json();
        setRequests([...requests, newRequest.request]);
        setCropType("");
        setWeight("");
        setPickupLocation("");
        setDropLocation("");
        navigate("/dashboard");
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (error) {
      setError("An error occurred");
      console.error(error); // Log the error for debugging
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/transport-request/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setRequests(requests.filter((request) => request._id !== id));
      } else {
        setError("Failed to delete request");
      }
    } catch (error) {
      setError("An error occurred");
      console.error(error); // Log the error for debugging
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (editingRequest) {
      try {
        const response = await fetch(
          `http://localhost:3000/transport-request/${editingRequest._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editingRequest),
          }
        );

        if (response.ok) {
          const updatedRequest = await response.json();
          setRequests(
            requests.map((request) =>
              request._id === updatedRequest.request._id
                ? updatedRequest.request
                : request
            )
          );
          setEditingRequest(null);
        } else {
          const result = await response.json();
          setError(result.message);
        }
      } catch (error) {
        setError("An error occurred");
        console.error(error); // Log the error for debugging
      }
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

      {editingRequest && (
        <div>
          <h2>Edit Transport Request</h2>
          <form onSubmit={handleUpdate}>
            <label>
              Crop Type:
              <input
                type="text"
                value={editingRequest.cropType}
                onChange={(e) =>
                  setEditingRequest({
                    ...editingRequest,
                    cropType: e.target.value,
                  })
                }
                required
              />
            </label>
            <br />
            <label>
              Weight:
              <input
                type="number"
                value={editingRequest.weight}
                onChange={(e) =>
                  setEditingRequest({
                    ...editingRequest,
                    weight: e.target.value,
                  })
                }
                required
              />
            </label>
            <br />
            <label>
              Pickup Location:
              <input
                type="text"
                value={editingRequest.pickupLocation}
                onChange={(e) =>
                  setEditingRequest({
                    ...editingRequest,
                    pickupLocation: e.target.value,
                  })
                }
                required
              />
            </label>
            <br />
            <label>
              Drop Location:
              <input
                type="text"
                value={editingRequest.dropLocation}
                onChange={(e) =>
                  setEditingRequest({
                    ...editingRequest,
                    dropLocation: e.target.value,
                  })
                }
                required
              />
            </label>
            <br />
            <button type="submit">Update Request</button>
          </form>
        </div>
      )}

      <h2>Existing Transport Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request._id}>
            {request.cropType} - {request.weight} kg
            <button onClick={() => setEditingRequest(request)}>Edit</button>
            <button onClick={() => handleDelete(request._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportRequest;
