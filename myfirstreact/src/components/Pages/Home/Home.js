import Header from "./parts/header/header.js";
import Content from "./parts/Content/content.js";
import Footer from "./parts/footer/footer.js";
import React, { Component } from 'react';


class Home extends Component {
  render() {
      return(
      <div className="Home">
        <Header />
        // <Content />
        <Footer />
      </div>
      )
  }
}


export default Home;
