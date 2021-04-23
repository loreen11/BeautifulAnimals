import React from 'react';
import ReactDOM from 'react-dom';



class IconItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container-fluid">
        <li><a href={this.props.item.link}><i className={this.props.item.icon}></i></a></li>
      </div>
    );
  }
}

export default IconItem;
