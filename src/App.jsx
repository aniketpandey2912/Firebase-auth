import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        Home
      </Route>
      <Route path="/login" element={<Login />}>
        Login
      </Route>
      <Route path="/signup" element={<Signup />}>
        Signup
      </Route>
    </Routes>
  );
}

export default App;
