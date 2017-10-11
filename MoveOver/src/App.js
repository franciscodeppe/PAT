import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import Page from './components/Page';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="app">

          <img src={'../Images/mountains.jpg'} className="mountains" alt="mountains" />
          <div className="app-header">
            <Nav />
          </div>

          <div className="row">
            <Page />
          </div>
        </div>


      </Router>
    );
  }
}

export default App;

