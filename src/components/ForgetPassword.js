// src/components/ForgetPassword.js
import React, { useState } from "react";

const ForgetPassword = ({ switchToLogin }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      <h2>Forget Password</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
      <p>
        Remembered your password?{" "}
        <span
          style={{ color: "blue", cursor: "pointer" }}
          onClick={switchToLogin}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default ForgetPassword;
