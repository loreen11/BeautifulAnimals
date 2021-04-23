import React from "react";
import './footer.css';
import IconItems from './iconBar/iconItems.js';


class Content extends React.Component{
  render() {
    return (
      <div className="Footer mt-5 text-center">
      <IconItems />
        <p>Phone Number: 050-778-9435
                         054-876-7336
                         04-655-1111  </p>
        <p>Email: animals112@gmail.com
                  dogs100@hotmail.com</p>
      </div>
    );
  }
}


export default Content;
