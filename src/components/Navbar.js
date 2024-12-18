import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaTypo3 } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1>
            TRAVEL <FaTypo3 />
          </h1>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" style={{color: "cyan"}}>Home</Link>
          </li>
          <li>
            <Link to="/services" style={{color: "cyan"}}>Services</Link>
          </li>
          <li>
            <Link to="/products" style={{color: "cyan"}}>Products</Link>
          </li>
          <li>
              <Link className="btn" to="/signup">Sign Up</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
