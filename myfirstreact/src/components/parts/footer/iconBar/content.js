import React from "react";
import '../footer.css';
import IconItems from './iconItems';


class Content extends React.Component{
  render() {
    return (
      <div className="Footer mt-5 text-center">
      <IconItems/>
        <p><b>מספרי טלפון: 050-778-9435</b></p>
        <p><b>054-695-6672</b></p>
        <p><b>04-998-7652</b></p>
        <p><b>Email: animals112@gmail.com</b></p>
        <p><b>       dogs100@hotmail.com</b></p>
      </div>
    );
  }
}


export default Content;
