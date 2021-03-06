import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';
import OneCampus from './OneCampus';
import OneStudent from './OneStudent';
import NavBar from './Navbar'
// import store from "../store";


export default class Main extends Component {
constructor (props) {
    super(props);

    this.state = {
      campuses: []
    };


  }

  // componentDidMount () {
  //   axios.get('/api/campus/')
  //     .then(res => res.data)
  //     .then(campus => {
  //         this.setState({ campuses: campus })
  //     });
  // }
  render() {
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
}

// <Route path="/students/:studentId" render={() => <OneStudent  campuses={this.state.campuses} /> } />
