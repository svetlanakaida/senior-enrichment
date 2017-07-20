import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DeleteStudent extends Component {
    constructor (props) {
    super(props);
    this.state = {
     selectedStudent: {},
     students: []

    };
    this.handleDelete = this.handleDelete.bind(this);

  }


  handleDelete(evt) {
    evt.preventDefault();
    const students = this.state.student.studentId;
    this.props.deleteStudent(studentId)
      .catch(err => {
        this.setState({students });
      });
  }
 render(){

  const student = this.state.selectedStudent;
  return (
    <Link to={`/delete/${student.id}`}>
               <button className="btn btn-default btn-xs"
                >Delete
               </button>
   </Link>
  )
 }
}
