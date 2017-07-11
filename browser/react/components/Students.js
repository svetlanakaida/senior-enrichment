import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
        console.log("student", student);
          this.setState({ students: student })
      });
  }

  render () {

    const students = this.state.students;

    return (
      <div>
        <h3>STUDENTS</h3>
        <button type="button" className="btn btn-default" aria-label="Left Align">
           <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
        </button>

        <div className="list-group">
          {
            students.map(student => {
              return (
                <div className="list-group-item" key={student.id}>
                  <Link to={`/students/${student.id}`}>{ student.name }</Link>
                    <button type="button" className="btn btn-default btn-xs">
                      Delete
                    </button>
                </div>
              );
            })
          }

        </div>

      </div>
    );
  }
}
