import React, { Component } from 'react';
import axios from 'axios';


export default class AddCampusForm extends Component {

  constructor (props) {
    super(props);
    console.log("PROPS", this.props)
    this.state = {
      name: '',
      imageUrl: ''

    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleNameChange (evt) {
    this.setState({
      name: evt.target.value
    });
  }

  handleImageUrlChange (evt) {
    this.setState({
     imageUrl: evt.target.value
    });
  }

  handleSubmit (evt) {
    evt.preventDefault();
     const name = this.state.name;
     const imageUrl = this.state.imageUrl;

     this.props.addCampus(name, imageUrl)
      .catch(err => {
        this.setState({ name: '', imageUrl: ''});
      });
  }

  render () {

    console.log("STATE", this.state)
    const handleNameChange = this.handleNameChange;
    const handleImageUrlChange = this.handleImageUrlChange;
    const handleSubmit = this.handleSubmit;
    const campuses = this.props.campuses;
console.log("CAMPUSES", campuses)
    return (
      <div className="well">
        <form className="form-inline" onSubmit ={handleSubmit}>
          <fieldset>
            <legend>Add to Campuslist</legend>
              <label> Name</label>
               <input type="text" className="form-control" placeholder="Name"
               value= {this.state.name}
               onChange= {handleNameChange} />
               <label>Image </label>
               <input type="text" className="form-control" placeholder="ImageUrl"
               value= {this.state.imageUrl}
                onChange={handleImageUrlChange} />
               <div className="form-group">
                  <div className="col-xs-10 col-xs-offset-2">
                    <button type="submit" className="btn btn-success">   Add Campus</button>
                 </div>
               </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
