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
    axios.get('/api/campus/')
      .then(res => res.data)
      .then(campus => {
          this.setState({ campuses: campus })
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
                <img src={ campus.imageUrl } />
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

