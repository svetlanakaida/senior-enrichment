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
           <h3>Students</h3>
           {
            this.state.selectedStudents.map(student => {
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
