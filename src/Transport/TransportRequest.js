import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TransportRequest.module.css"; // Import CSS module

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
        console.error(error);
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
        navigate("/dashboard/transport");
      } else {
        const result = await response.json();
        setError(result.message);
      }
    } catch (error) {
      setError("An error occurred");
      console.error(error);
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
      console.error(error);
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
        console.error(error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Transport Request</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Crop Type:
          <input
            type="text"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Weight:
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Pickup Location:
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Drop Location:
          <input
            type="text"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
            required
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}

      {editingRequest && (
        <div className={styles.editContainer}>
          <h2 className={styles.title}>Edit Transport Request</h2>
          <form onSubmit={handleUpdate} className={styles.form}>
            <label className={styles.label}>
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
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
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
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
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
                className={styles.input}
              />
            </label>
            <label className={styles.label}>
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
                className={styles.input}
              />
            </label>
            <button type="submit" className={styles.submitButton}>
              Update Request
            </button>
          </form>
        </div>
      )}

      <h2 className={styles.title}>Existing Transport Requests</h2>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Crop Type</th>
              <th>Weight (kg)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id} className={styles.row}>
                <td>{request.cropType}</td>
                <td>{request.weight}</td>
                <td className={styles.actions}>
                  <button
                    onClick={() => setEditingRequest(request)}
                    className={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(request._id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransportRequest;
