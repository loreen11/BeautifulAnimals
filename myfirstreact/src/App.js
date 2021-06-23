import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home.js';
import Services from './components/Pages/Services/Services.js'
import Contact from './components/Pages/Contact-Us/Contact-Us.js'

class App extends React.Component{
  render() {
  return (

      <main>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/Services" component={Services} exact/>
           <Route path="/ContactUs" component={Contact} exact/>

         </Switch>
      </main>

  );
}
}


export default App;
