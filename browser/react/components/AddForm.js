import React, { Component } from 'react';
import axios from 'axios';

export default class AddForm extends Component {

  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      campus: ''

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/student/')
      .then(res => res.data)
      .then(students => {
        this.setState({ students });
      });
  }

  handleChange (evt) {
    console.log(evt.target.value);
    this.setState({
      name: evt.target.name.value,
      email: evt.target.email.value

    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.addStudent(this.state);

    this.setState({
      name: '',
      email: '',
    });

  }

  render () {


    const handleChange = this.handleChange;
    const handleSubmit = this.handleSubmit;

    return (
      <div className="well">
        <form className="form-inline" onSubmit ={handleSubmit}>
          <fieldset>
            <legend>Add to Studentlist</legend>
              <label> Name</label>
               <input name ="name" type="text" className="form-control" placeholder="Name"
               onChange={handleChange}/>
               <label>Email </label>
               <input name ="email" type="text" className="form-control" placeholder="Email"
                onChange={handleChange}/>
                 <label>Campus </label>
               <input name ="campus" type="text" className="form-control" placeholder="Campus"
                onChange={handleChange}/>
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
