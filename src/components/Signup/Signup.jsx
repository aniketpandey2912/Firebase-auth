import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, signInWithFacebook, signInWithGoogle } from "../../firebase";

import InputControl from "../InputControl/InputControl";
import styles from "./Signup.module.css";

const initState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initState);
  const [error, setError] = useState("");
  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmission = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
    ) {
      setError("All fields are required");
      return;
    }
    setSubmitBtnDisabled(true);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async (res) => {
        await updateProfile(res.user, { displayName: formData.name });
        setSubmitBtnDisabled(false);
        console.log(res);
        alert("signup success");
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
        <h1>SignUp</h1>
        <div>
          <InputControl
            name="name"
            label="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
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
            SignUp
          </button>

          {/* google-auth */}
          <button onClick={() => signInWithGoogle()}>
            Sign in with google account
          </button>

          {/* Facebook-auth */}
          <button onClick={() => signInWithFacebook("sign in")}>
            Sign in with Facebook account
          </button>
          <p>
            Already have an account ?
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
