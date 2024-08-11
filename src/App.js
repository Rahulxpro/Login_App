// src/App.js
import React, { useState } from "react";
import Login from "./components/LoginAuthecation";
import Signup from "./components/SignUp";
import ForgetPassword from "./components/ForgetPassword";

const App = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const handleSignupClose = () => setShowSignup(false);
  const handleForgetPasswordClose = () => setShowForgetPassword(false);

  return (
    <div>
      <Login
        switchToSignup={() => setShowSignup(true)}
        switchToForgetPassword={() => setShowForgetPassword(true)}
      />

      {/* Signup Modal */}
      {showSignup && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <button style={closeButtonStyles} onClick={handleSignupClose}>
              X
            </button>
            <Signup switchToLogin={handleSignupClose} />
          </div>
        </div>
      )}

      {/* Forget Password Modal */}
      {showForgetPassword && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <button
              style={closeButtonStyles}
              onClick={handleForgetPasswordClose}
            >
              X
            </button>
            <ForgetPassword switchToLogin={handleForgetPasswordClose} />
          </div>
        </div>
      )}
    </div>
  );
};

// Basic modal styles
const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalContentStyles = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  position: "relative",
  maxWidth: "400px",
  width: "100%",
};

const closeButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};

export default App;
