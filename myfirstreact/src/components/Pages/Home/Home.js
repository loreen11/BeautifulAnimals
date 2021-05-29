import React from 'react';
import Header from "../../parts/header/Header.js";
import ContentHome from "./content-home/content-home.js";
import Footer from "../../parts/footer/footer.js";



class Home extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/home')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    if (this.state.data.length===0)
        return (<p>ops</p>);
    console.log(this.state.data.Header.Navbar)


      return(
      <div id="Home">
        <Header data ={this.state.data.Header.Navbar}/>
        <ContentHome data = {this.state.data.Content} />
        <Footer />
      </div>
      )
  }
}


export default Home;
