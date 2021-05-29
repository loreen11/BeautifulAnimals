import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home.js';


class App extends React.Component{
  render() {
  return (

      <main>
          <Switch>
           <Route path="/" component={Home} exact/>
         </Switch>
      </main>

  );
}
}


export default App;
