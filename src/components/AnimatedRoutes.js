import React from "react";
import Home from "../pages/Home";
import Single from "../pages/Single";
import Write from "../pages/Write";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  const currentUser = false;
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/post" element={<Home></Home>}></Route>
        <Route path="/post/:id" element={<Single></Single>}></Route>
        <Route
          path="/register"
          element={currentUser ? <Home></Home> : <Register></Register>}
        ></Route>
        <Route
          path="/login"
          element={currentUser ? <Home></Home> : <Login></Login>}
        ></Route>
        <Route path="/write" element={<Write></Write>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
        <Route path="/logout" element={<Logout></Logout>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
