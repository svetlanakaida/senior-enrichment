import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';



export default class OneStudent extends Component {

  constructor () {
    super();
    this.state = {
      selectedStudent: {}
    };

  }

  componentDidMount () {
    const studentId = this.props.match.params.studentId;
    axios.get(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        selectedStudent: student
      }));
  }

  render () {
    const student = this.state.selectedStudent;
    let campus = this.state.selectedStudent.campus;
    if(!campus){
      campus = "campus";
    }
    return (
      <div>
      <table className="table">
        <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>CAMPUS</th>
          <th>Update</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{campus.name}</td>
          <td>
              <Link to={`/update/${student.id}`}>
               <button className="btn btn-default btn-xs">Update
               </button>
              </Link>
          </td>
          <td>
              <Link to={`/update/${student.id}`}>
               <button className="btn btn-default btn-xs">Delete
               </button>
              </Link>
          </td>
      </tr>
      </tbody>
      </table>
      </div>
    );
  }
}
