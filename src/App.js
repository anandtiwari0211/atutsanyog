import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Matches from './Components/Matches';
// import Janganna from './Components/Janganna';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Single_details from './Components/Single_details';
import Short_list from './Components/Short_list';
// import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/matches" component={Matches} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/registration" component={Registration} />
              <Route exact path="/singledeatils" component={Single_details} />
              <Route exact path="/shortlist" component={Short_list} />
          </div>
      </Router>
    );
  }
}

export default App;
