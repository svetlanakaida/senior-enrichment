import React, { Component } from 'react';
import axios from 'axios';

export default class AddForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      studentId: 1,
      error: false,
      students: []
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

//   componentDidMount () {
//     axios.get('/api/student')
//       .then(res => res.data)
//       .then(students => {
//         this.setState({ students });
//       });
//   }

//   handleChange (evt) {
//     this.setState({
//       studentId: evt.target.value,
//       error: false
//     });
//   }

//   handleSubmit (evt) {
//     evt.preventDefault();

//     // const campusId = this.props.playlist.id;
//     const studentId = this.state.studentId;

//     this.props.addSongToPlaylist(playlistId, studentId)
//       .catch(err => {
//         this.setState({ error: true });
//       });
//   }

  render () {


    const error = this.state.error;
    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div className="well">
        <form className="form-inline">
          <fieldset>
            <legend>Add to Studentlist</legend>
            { error && <div className="alert alert-danger">Song is a duplicate</div> }

              <label> Name</label>
    <input type="name" className="form-control" placeholder="Name"></input>

   <label>Email </label>
    <input type="email" className="form-control" placeholder="Email"></input>

              <label> Campus </label>
    <input type="campus" className="form-control" placeholder="Campus"></input>

            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">   Add Student</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
