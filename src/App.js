import React, { useState } from "react";
import "./App.css"; // CSS file with styles

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPage, setCurrentPage] = useState("signin");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSignIn = () => {
    if (!email || !password) {
      togglePopup();
    } else {
      // Perform sign in logic here
      console.log("Signing in...");
      // Reset form
      setEmail("");
      setPassword("");
    }
  };

  const handleSignUp = () => {
    if (!email || !password || !name || !phone) {
      togglePopup();
    } else {
      // Perform sign up logic here
      console.log("Signing up...");
      // Reset form
      setEmail("");
      setPassword("");
      setName("");
      setPhone("");
    }
  };

  return (
    <div className="App">
      <div className="form">
        <h1>Login Page</h1>
        {currentPage === "signin" ? (
          <>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={() => setCurrentPage("signup")}>Sign Up</button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={() => setCurrentPage("signin")}>Sign In</button>
          </>
        )}
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Please fill all the fields</h2>
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
