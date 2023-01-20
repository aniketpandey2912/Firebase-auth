import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithFacebook, signInWithGoogle } from "../../firebase";

import InputControl from "../InputControl/InputControl";
import styles from "./Login.module.css";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initState);
  const [error, setError] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmission = () => {
    if (formData.email === "" || formData.password === "") {
      setError("All fields are required");
      return;
    }
    setSubmitBtnDisabled(true);
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        setSubmitBtnDisabled(false);
        alert("login success");
        setError("");
        navigate("/");
      })
      .catch((err) => {
        setSubmitBtnDisabled(false);
        alert(err.message);
        console.log("Error", err.message);
        setError(err.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1>Login</h1>
        <div>
          <InputControl
            name="email"
            label="Email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputControl
            name="password"
            label="Password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={styles.footer}>
          <b className={styles.err}>{error}</b>
          <button disabled={submitBtnDisabled} onClick={handleSubmission}>
            Login
          </button>

          {/* google-auth */}
          <button onClick={() => signInWithGoogle()}>
            Sign in with google account
          </button>

          {/* Facebook-auth */}
          <button onClick={() => signInWithFacebook("login")}>
            Sign in with Facebook account
          </button>
          <p>
            Don't have an account ?
            <span>
              <Link to="/signup">Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
