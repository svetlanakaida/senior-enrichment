import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';
import OneCampus from './OneCampus';
import OneStudent from './OneStudent';
import NavBar from './NavBar';

export default class Main extends Component {


  render () {

    return (
      <Router>
        <div >
          <div className="col-xs-10">
              <NavBar />
              <hr/>
            <Switch>
             <Route exact path="/" component={Campuses} />
              <Route exact path="/campuses" component={Campuses} />
              <Route path="/campuses/:campusId" component={OneCampus} />
              <Route exact path="/students" component={Students} />
              <Route path="/students/:studentId" component={OneStudent} />
            </Switch>
          </div>
        </div>
    </Router>
    );
  }
}
