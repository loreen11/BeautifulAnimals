import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../parts/header/header.js';
import Content from './Content/content.js';

class Contact extends React.Component{
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('/contact')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render(){

    if(!this.state.data){
      return <div>loading...</div>
    }
    return(
      <div id="contactus">
        <Header data = {this.state.data.Header.Navbar} />
        <Content content={this.state.data.Content} />
      </div>
    )
  }



}
export default Contact
