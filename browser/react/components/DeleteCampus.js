import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DeleteCampus extends Component {
    constructor (props) {
    super(props);
    this.state = {
     campuses: []
    };
    this.handleDelete = this.handleDelete.bind(this);

  }


  handleDelete(evt) {
    evt.preventDefault();
    const campusId = this.props.campusId;
    this.props.deleteCampus(campusId)

  }
 render(){

  return (

               <button className="btn btn-default btn-xs" onClick={this.handleDelete}
                >Delete
               </button>

  )
 }
}
