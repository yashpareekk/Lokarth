import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"
import {IoMdLock} from "react-icons/io"
import {BsFillPersonCheckFill} from "react-icons/bs"
import {MdKeyboardArrowDown} from "react-icons/md"

const Navbar = () => {
 
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About Us</a>
        </li>
        <li className="p__opensans">
          <a href="#help">Help</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact Us</a>
        </li>
        <li className="p__opensans">
          <a href="#resources">Resources <MdKeyboardArrowDown/></a>
        </li>
      </ul>
      <div className="app__navbar-auth">
      <div>
        
      </div>
        <button href="#signin" className="b1">
          <IoMdLock/>
          SIGN IN
        </button>
        
        <button href="/signup" className="b2">
          <BsFillPersonCheckFill/>
          SIGN UP
        </button>
      </div>
     
    </nav>
  );
};

export default Navbar;
