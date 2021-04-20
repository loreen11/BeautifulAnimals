import React, { Component } from 'react';
//import Navbar from "./Navbar/Navbar.js";
import Logo from "./logo/logo.js";
// import './header.css';
import Navbar from "./Navbar/Navbar.js";
import './header.css'

class header extends Component {
  render() {
    return (
      <div className="header">
         <Logo />
         <Navbar />
      </div>

      //<Navbar />
    );
  }
}

export default header;
