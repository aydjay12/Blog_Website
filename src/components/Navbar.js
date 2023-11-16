import React, { useState } from "react";
import Logo from "../assets/bloglogo.png";
import { Link, NavLink } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [user, setUser] = useState(true);
  const [openLinks, setOpenLinks] = useState(false);

  const logout = () => {
    setUser(!user);
  };

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img className="logo" src={Logo} alt=""></img>
        <div className="hiddenLinks">
          <div>
            <NavLink to="/"> Home </NavLink>
            <Link> About </Link>
            <Link> Contact </Link>
          </div>
          <div>
            {" "}
            <NavLink to="/write"> Write </NavLink>
            {user && <NavLink className="topListItem">LOGOUT</NavLink>}
          </div>
        </div>
      </div>
      <div className="rightSide" id="right">
        <NavLink to="/"> Home </NavLink>
        <Link> About </Link>
        <Link> Contact </Link>
        <NavLink to="/write"> Write </NavLink>
        {user && (
          <NavLink onClick={logout} className="topListItem">
            LOGOUT
          </NavLink>
        )}
        <button onClick={toggleNavbar}>
          <ReorderIcon></ReorderIcon>
        </button>
      </div>
      <div className="socialMedia">
        <div className="socialLogos">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter "></i>
          <i className="fab fa-github"></i>
          <i className="fab fa-instagram"></i>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <NavLink className="link" to="/login">
                  LOGIN
                </NavLink>
              </li>
              <li className="topListItem">
                <NavLink className="link" to="/register">
                  REGISTER
                </NavLink>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
