import React from "react";
import "./Dashboard.css";

const Dashboard = ({ user }) => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to your Dashboard!</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Password:</strong> {user.password}
      </p>
    </div>
  );
};

export default Dashboard;
