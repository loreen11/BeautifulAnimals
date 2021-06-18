import React from 'react';
import ReactDOM from 'react-dom';

import "./menuitem.css";

class MenuItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <li className="nav-item item">
          <a className="nav-link loreen" href={this.props.item.url}>{this.props.item.title}<i className={this.props.item.icon}></i></a>
        </li>
    );
  }
}

export default MenuItem;
