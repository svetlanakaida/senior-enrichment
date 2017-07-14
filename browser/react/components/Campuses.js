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


// import React from 'react';
// import { withRouter, NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';


// function Campuses (props) {

//     const { campuses, changeCampus } = props;


//     return (
//       <div>
//         <h3>CAMPUSES</h3>
//         <div className="list-group">
//           {
//             campuses.map(campus => {
//               return (
//                 <div className="col-lg-6" key={campus.id}>
//                   <NavLink to={`/campuses/${campus.id}`}>
//                     <img src={ campus.imageUrl } />
//                     <div className="caption">
//                       <h5>
//                         <span>{ campus.name }</span>
//                       </h5>
//                     </div>
//                   </NavLink>
//                 </div>
//               );
//             })
//           }
//         </div>
//         <li>
//         <NavLink to="/new-campus">Create a campus...</NavLink>
//       </li>
//       </div>
//     );
//   }

// const mapStateToProps = function (state) {
//   return {
//     campuses: state.campuses
//   };
// };

// export default withRouter(connect(mapStateToProps)(Campuses));
