import React, { Component } from 'react';
import axios from 'axios';


export default class AddStudentForm extends Component {

  constructor (props) {
    super(props);
    console.log("PROPS", this.props)
    this.state = {
      name: '',
      email: '',
      campusId: 1

    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleNameChange (evt) {
    this.setState({
      name: evt.target.value
    });
  }

  handleEmailChange (evt) {
    this.setState({
      email: evt.target.value
    });
  }
  handleCampusChange (evt) {
    this.setState({
      campusId: evt.target.value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
     const name = this.state.name;
     const email = this.state.email;
     const campusId =this.state.campusId;
     this.props.addStudent(name, email, campusId )
      .catch(err => {
        this.setState({ name: '', email: '', campusId: '' });
      });
  }

  render () {

    console.log("STATE", this.state)
    const handleNameChange = this.handleNameChange;
    const handleEmailChange = this.handleEmailChange;
    const handleCampusChange = this.handleCampusChange;
    const handleSubmit = this.handleSubmit;
    const campuses = this.props.campuses;
console.log("CAMPUSES", campuses)
    return (
      <div className="well">
        <form className="form-inline" onSubmit ={handleSubmit}>
          <fieldset>
            <legend>Add to Studentlist</legend>
              <label> Name</label>
               <input type="text" className="form-control" placeholder="Name"
               value= {this.state.name}
               onChange= {handleNameChange} />
               <label>Email </label>
               <input type="text" className="form-control" placeholder="Email"
               value= {this.state.email}
                onChange={handleEmailChange} />
                 <label>Campus </label>
                <div className="form-control">
                 <select  onChange={handleCampusChange}>
                {
                   campuses.map(campus => (
                        <option key={campus.id} value={campus.id}>{campus.name}</option>
                    ))
                }
                   </select>
              </div>
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
