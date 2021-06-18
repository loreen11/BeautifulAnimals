import React from 'react';
import ReactDOM from 'react-dom';
import IconJson from './IconJson';
import IconItem from './iconItem';


class IconItems extends React.Component {

  render() {
    const IconItems = IconJson.map((jsonpart) =>(
      <IconItem item={jsonpart} />
    ));
    return(
      <ul className="navbar-nav text-center">{IconItems}</ul>
    );
  }
}

export default IconItems;
