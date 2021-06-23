import React from 'react';
import ReactDOM from 'react-dom';
import Cards from '../../../general/Card/Card.js';
// import './cards-home.css'

class ContentServicese extends React.Component{
  constructor(props) {
    super(props);
  }

    render(){
        return(
            <div className="container">
              <Cards data = {this.props.data[0].img} />
            </div>
        )
    }
}
export default ContentServicese;
