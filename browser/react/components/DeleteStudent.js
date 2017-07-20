import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DeleteStudent extends Component {
    constructor (props) {
    super(props);
    this.state = {

     students: [],
     studentId: ""
    };
    this.handleDelete = this.handleDelete.bind(this);

  }


  handleDelete(evt) {
      console.log("HANDLE DELETE PROPS", this.props)
    evt.preventDefault();
    const studentId = this.state.studentId;
    this.props.deleteStudent(studentId)

  }
 render(){

//   const studentId = this.state.studentId;
  return (

               <button className="btn btn-default btn-xs" onClick={this.handleDelete}
                >Delete
               </button>

  )
 }
}
