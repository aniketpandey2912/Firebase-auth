import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

import styles from "./Home.module.css";

const Home = () => {
  const [userName, setUserName] = useState("");

  const handleUserName = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  };

  const handleLogout = () => {
    auth.signOut();
    // console.log(userName, "logout");
  };

  useEffect(() => {
    handleUserName();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/login">
          <h1>Login</h1>
        </Link>
        <Link to="/signup">
          <h1>Signup</h1>
        </Link>

        {userName && (
          <button className={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
      <div className={styles.welcome}>
        <h2>{userName !== "" ? `Welcome ${userName}` : "Login Please"}</h2>
      </div>
    </>
  );
};

export default Home;
