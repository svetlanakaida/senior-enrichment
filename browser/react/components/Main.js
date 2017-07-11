import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';
import OneCampus from './OneCampus';
import OneStudent from './OneStudent';


export default class Main extends Component {


  render () {

    return (
      <Router>
        <div >
          <div className="col-xs-10">
           <ul className="nav nav-tabs">
              <li><Link to={'/campuses'}>HOME</Link></li>
              <li><Link to={'/students'}>STUDENTS</Link></li>
            </ul>
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
