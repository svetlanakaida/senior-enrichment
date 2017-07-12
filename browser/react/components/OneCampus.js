import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Students from '../components/Students';


export default class OneCampus extends Component {

  constructor () {
    super();
    this.state = {
      selectedCampus: {},
      selectedStudents:[]
    };
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        selectedCampus: campus
      }))
        .then( res =>{
        axios.get(`/api/student/?campusId=${campusId}`)
        .then(res => res.data)
        .then(students => this.setState({
          selectedStudents: students
      }));
      });
  }

  render () {
    const campus = this.state.selectedCampus;

    return (
      <div className="campus">

        <div>
          <img src={ campus.imageUrl } className="img-thumbnail" />
           <h3>{ campus.name }</h3>
           <h5>Students</h5>
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
            this.state.selectedStudents.map(student => (
              <tr  key={student.id}>
              <td>{ student.name}</td>
              <td>{student.email }</td>
              <td>{campus.name}</td>
              <td>
              <Link to={`/students/${student.id}`}>
                <button type="button" className="btn btn-default" aria-label="Left Align">View profile
                </button>
                 </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
        </div>
      </div>
    );
  }
}

