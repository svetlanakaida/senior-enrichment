import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from '../store';
import AddCampusForm from './AddCampusForm';


export default class Campuses extends Component {

  constructor () {
    super();
    this.state = {
      campuses: []
    };
    this.addCampus = this.addCampus.bind(this);
  }

  componentDidMount () {
    axios.get('/api/campus/')
      .then(res => res.data)
      .then(campus => {
          this.setState({ campuses: campus })
      });
  }

 addCampus (name, imageUrl) {
   console.log("Print", name, imageUrl)
    return  axios.post('/api/campus/', {
     name, imageUrl
    })
    .then(res => res.data)
    .then(campus => {
      const campuses = this.state.campuses;
      const newCampus = [...campuses, campus ];
     this.setState({ campuses: newCampus });
    });

  }
  render () {

    const campuses = this.state.campuses;

    return (
      <div>
        <h3>CAMPUSES</h3>
        <AddCampusForm  addCampus ={this.addCampus} />
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

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import store from '../store';


// export default class Campuses extends Component {

//   constructor () {
//     super();
//     this.state = store.getState();
//   }

//   componentDidMount () {
//     this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
//   }

//   componentWillUnmount () {
//     this.unsubscribe();
//   }


//   render () {

//     const campuses = this.state.campuses;

//     return (
//       <div>
//         <h3>CAMPUSES</h3>
//         <div className="list-group">
//           {
//             campuses.map(campus => {
//               return (
//                 <div className="col-lg-6" key={campus.id}>
//                   <Link to={`/campuses/${campus.id}`}>
//                     <img src={ campus.imageUrl } />
//                     <div className="caption">
//                       <h5>
//                         <span>{ campus.name }</span>
//                       </h5>
//                     </div>
//                   </Link>
//                 </div>
//               );
//             })
//           }
//         </div>
//       </div>
//     );
//   }
// }
