import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';
import OneCampus from './OneCampus';
import OneStudent from './OneStudent';
import NavBar from './NavBar';
import AddForm from './AddForm';

export default class Main extends Component {

constructor () {
    super();
    this.state = {
     studentlist: []
    };

    this.addStudent = this.addStudent.bind(this);
  }

  componentDidMount () {
    axios.get('/api/student')
      .then(res => res.data)
      .then(studentlist => this.setState({ studentlist }));
  }

  addStudent (name) {
    axios.post('/api/student', { name })
      .then(res => res.data)
      .then(student => {
        this.setState({ studentlist: [...this.state.studentlist, student] })
      });
  }

  render () {
    const addStudent = this.addStudent;

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
              <Route path="/new-student" render={() => <AddForm addStudent={addStudent} />} />
            </Switch>
          </div>
        </div>
    </Router>
    );
  }
}
