import React from 'react';
import ReactDOM from 'react-dom';
import HomeCard from './cards-home';


class ContentHome extends React.Component{
  constructor(props) {
    super(props);

  }

    render(){
    console.log(this.props.data.Card);
        return(
            <div className="container">
              <HomeCard data = {this.props.data.Card} />

            </div>
        )
    }
}
export default ContentHome;
