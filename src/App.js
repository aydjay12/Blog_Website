import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import React, { useState, useEffect } from "react";
// import ExpandLessIcon from "./assets/expandless.png";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  // const [showButton, setShowButton] = useState(false);

  // // Function to scroll back to the top of the page
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth", // Smooth scrolling animation
  //   });
  // };

  // // Add a scroll event listener to show/hide the button
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.pageYOffset > 100) {
  //       // Show the button when the user has scrolled down 100px
  //       setShowButton(true);
  //     } else {
  //       // Hide the button when the user is at the top of the page
  //       setShowButton(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Remove the scroll event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div className="App">
      <Router basename="/Blog_Website">
        <Navbar></Navbar>
        <AnimatedRoutes></AnimatedRoutes>
        <Footer></Footer>
      </Router>
      {/* {showButton && (
        <button className="back-to-top-button" onClick={scrollToTop}>
          <img src={ExpandLessIcon} alt="Back to Top" width="40" height="40" />
        </button>
      )} */}
    </div>
  );
};

export default App;
