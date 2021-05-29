import React, { Component } from 'react';

import NavBar from "./Navbar/Navbar.js";
import "./header.css"

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    
    return (
      <div>
        <NavBar data={this.props.data}/>


      </div>


    );
  }
}

export default Header;
