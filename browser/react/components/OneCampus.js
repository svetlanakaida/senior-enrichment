import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Students from '../components/Students';
import UpdateCampus from './UpdateCampus';
import DeleteCampus from './DeleteCampus';


export default class OneCampus extends Component {

  constructor () {
    super();
    this.state = {
      selectedCampus: {},
      selectedStudents:[]
    };
     this.updateCampus = this.updateCampus.bind(this);
     this.deleteCampus = this.deleteCampus.bind(this);
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        selectedCampus: campus
      }))
        .then( res =>{
        axios.get(`/api/student/?campusId=${campusId}`)
        .then(res => res.data)
        .then(students => this.setState({
          selectedStudents: students
      }));
      });
  }

  updateCampus (name, imageUrl) {
      const campusId = this.props.match.params.campusId;
    return  axios.put(`/api/campus/${campusId}`, {
     name, imageUrl
    })
    .then(res => res.data)
    .then(campus => {
      const updatedCampus = this.state.campuses;
     this.setState({ selectedCampus: updatedCampus });
    });
  }

deleteCampus (campusId) {
    return  axios.delete(`/api/campus/${campusId}`)
    // .then(res => res.data)
    .then(campus => {
     var filteredCampuses = this.state.campuses.filter(
     campus => campus.id !== campusId
    )
    this.setState({ selectedCampus: filteredCampuses})
    .then(( deleteCampus ) => {
     }
    )
    })
    .catch(err => console.log(err))
  }


  render () {
    const campus = this.state.selectedCampus;

    return (
      <div className="campus">
       <UpdateCampus updateCampus ={this.updateCampus} campuses = {this.state.campuses}  />
        <div>
          <img src={ campus.imageUrl } className="img-thumbnail" />
           <h3>{ campus.name } <DeleteCampus deleteCampus ={this.deleteCampus}  campusId= {campus.id} /></h3>
           <h5>Students</h5>
           <table className='table'>
      <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>CAMPUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{
            this.state.selectedStudents.map(student => (
              <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email }</td>
              <td>{campus.name}</td>
              <td>
              <Link to={`/students/${student.id}`}>
                <button type="button" className="btn btn-default" aria-label="Left Align">View profile
                </button>
                 </Link>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
        </div>
      </div>
    );
  }
}


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Students from '../components/Students';
// import UpdateCampus from './UpdateCampus';
// import { getAllCampuses, removeCampus } from './store/campuses';



// export default class OneCampus extends Component {

//   constructor () {
//     super();
//     this.state = {
//       selectedCampus: {},
//       selectedStudents:[]
//     };
//      this.updateCampus = this.updateCampus.bind(this);
//   }

//   componentDidMount () {
//     const campusId = this.props.match.params.campusId;
//     axios.get(`/api/campus/${campusId}`)
//       .then(res => res.data)
//       .then(campus => this.setState({
//         selectedCampus: campus
//       }))
//         .then( res =>{
//         axios.get(`/api/student/?campusId=${campusId}`)
//         .then(res => res.data)
//         .then(students => this.setState({
//           selectedStudents: students
//       }));
//       });
//   }

//   updateCampus (name, imageUrl) {
//       const campusId = this.props.match.params.campusId;
//     return  axios.put(`/api/campus/${campusId}`, {
//      name, imageUrl
//     })
//     .then(res => res.data)
//     .then(campus => {
//       const updatedCampus = this.state.campuses;
//      this.setState({ campuses: updatedCampus });
//     });
//   }


//   render () {
//     const campus = this.state.selectedCampus;

//     return (
//       <div className="campus">
//        <UpdateCampus updateCampus ={this.updateCampus} campuses = {this.state.campuses}  />
//         <div>
//           <img src={ campus.imageUrl } className="img-thumbnail" />
//            <h3>{ campus.name }</h3>
//            <h5>Students</h5>
//            <table className='table'>
//       <thead>
//         <tr>
//           <th>NAME</th>
//           <th>EMAIL</th>
//           <th>CAMPUS</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>{
//             this.state.selectedStudents.map(student => (
//               <tr key={student.id}>
//               <td>{student.name}</td>
//               <td>{student.email }</td>
//               <td>{campus.name}</td>
//               <td>
//               <Link to={`/students/${student.id}`}>
//                 <button type="button" className="btn btn-default" aria-label="Left Align">View profile
//                 </button>
//                  </Link>
//               </td>
//             </tr>
//           ))
//         }
//       </tbody>
//     </table>
//         </div>
//       </div>
//     );
//   }
// }

