import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddForm from './AddForm';



export default class Students extends Component {

  constructor () {
    super();
    this.state = {
      students: []
    };
    this.addStudent = this.addStudent.bind(this);

  }

  componentDidMount () {
    axios.get('/api/student/')
      .then(res => res.data)
      .then(student => {
          this.setState({ students: student })
      });
  }
   addStudent (student) {
    axios.post('/api/student/', {
      name: student.name,
      email: student.email
    })
    .then(res => res.data)
    .then(student => {
      const students = this.state.students;
      const newStudent = [...students, student ];
     this.setState({ students: newStudent });
    });
  }
  render () {

    const students = this.state.students;

    return (
      <div>
      <div>
      <AddForm students={students} addStudent ={this.addStudent} />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CAMPUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{
          students.map(student => (
              <tr  key={student.id}>
                <td>{ student.name}</td>
                <td>{student.email }</td>
                <td>{student.campus.name}</td>
                <td>
                <Link to={`/students/${student.id}`}>
                  <button type="button" className="btn btn-default" aria-label="Left Align">View
                  </button>
                </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    );
  }
}
