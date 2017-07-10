import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Campuses extends Component {

  constructor () {
    super();
    this.state = {
      campuses: []
    };
  }

  componentDidMount () {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campus => {
          this.setState({ campus })
      });
  }

  render () {

    const campuses = this.state.campuses;

    return (
      <div>
        <h3>CAMPUSES</h3>
        <div className="list-group">
          {
            campuses.map(campus => {
              return (
                <div className="list-group-item" key={campus.id}>
                  <Link to={`/campuses/${campus.id}`}>{ campus.name }</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
