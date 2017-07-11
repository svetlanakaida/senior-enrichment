import React, { Component } from 'react';
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

    return (
      <div className="student">
        <div>
          <h3>{student.name}</h3>
          <h3>{student.email}</h3>

        </div>
      </div>
    );
  }
}
