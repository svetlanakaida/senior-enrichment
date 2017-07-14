import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';
import OneCampus from './OneCampus';
import OneStudent from './OneStudent';
import NavBar from './NavBar';


const Main = () => {


    return (
      <Router>
         <div id="main" className="container-fluid">
          <div className="col-xs-2">
              <NavBar />
          </div>
          <div className="col-xs-10">
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

export default Main;
