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
                <div className="col-lg-6" key={campus.id}>
                  <Link to={`/campuses/${campus.id}`}>
                    <img src={ campus.imageUrl } />
                    <div className="caption">
                      <h5>
                        <span>{ campus.name }</span>
                      </h5>
                    </div>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

