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


  }



  componentDidMount () {
    axios.get('/api/student/')
      .then(res => res.data)
      .then(student => {
          this.setState({ students: student })
      });
  }

  render () {

    const students = this.state.students;

    return (
      <div>
      <AddForm students={students} />
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
                <td>{}</td>
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
