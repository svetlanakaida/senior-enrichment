import React, { Component } from 'react';
import axios from 'axios';


export default class OneCampus extends Component {

  constructor () {
    super();
    this.state = {
      selectedCampus: {}
    };
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        selectedCampus: campus
      }));
  }

  render () {
    const campus = this.state.selectedCampus;

    return (
      <div className="campus">
        <div>
          <h3>{ campus.name }</h3>
          <img src={ campus.imageUrl } className="img-thumbnail" />
        </div>
      </div>
    );
  }
}
