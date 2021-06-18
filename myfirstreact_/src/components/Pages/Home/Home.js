import React from 'react';
import ReactDOM from 'react-dom';
import Header from "../../parts/header/header";
import ContentHome from "./content-home/content-home";
import Footer from "../../parts/footer/footer";

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
    // if (this.state.data.length===0)
    //     return (<p>ops</p>);
    return(
      <div id="Home">
        <Header />
        <ContentHome  />
        <Footer />
      </div>
      )
  }
}


export default Home;
