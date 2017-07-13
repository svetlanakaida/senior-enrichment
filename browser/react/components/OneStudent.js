import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import StudentEdit from './StudentEdit';


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
        <td>{}</td>
          <td>

            <button className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-play"> <Link to={`/update/${student.id}`}>Update</Link></span>
            </button>
          </td>
          <td>
            <button className="btn btn-default btn-xs">
            <span className="glyphicon glyphicon-play">Delete</span>
            </button>
          </td>
      </tr>
      </tbody>
      </table>
</div>
    );
  }
}
