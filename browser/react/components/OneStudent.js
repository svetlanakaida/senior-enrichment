import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import UpdateStudent from './UpdateStudent';


export default class OneStudent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      selectedStudent: {},
      campuses: [],
      students: []
    };

   this.updateStudent = this.updateStudent.bind(this);
  }

  componentDidMount () {
    const studentId = this.props.match.params.studentId;
    axios.get(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        selectedStudent: student
      }));
       axios.get('/api/campus/')
      .then(res => res.data)
      .then(campus => {
        console.log("PRINT_CAMPUSES", campus)
          this.setState({ campuses: campus })
      })
        .catch(err => {
          console.log(err)
        })
  }


   updateStudent (name, email, campusId) {
     const studentId = this.props.match.params.studentId;
    return  axios.put(`/api/student/${studentId}`, {
     name, email, campusId
    })
    .then(res => res.data)
    .then(student => {
      const updatedStudent = this.state.students;
     this.setState({ students: updatedStudent });
    });
  }

  render () {
    console.log("PRINT PROPS", this.props)
    const student = this.state.selectedStudent;
    let campus = this.state.selectedStudent.campus;
    if(!campus){
      campus = "campus";
    }
    return (

      <div>
      <UpdateStudent updateStudent ={this.updateStudent} campuses = {this.state.campuses} />
      <table className="table">
        <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>CAMPUS</th>

        </tr>
      </thead>
      <tbody>
      <tr>
        <td>{student.name}</td>
        <td>{student.email}</td>
        <td>{campus.name}</td>
      </tr>
      </tbody>
      </table>
      </div>
    );
  }
}


// import store from '../store';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class OneStudent extends Component {

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
//     const student = this.state.selectedStudent;
//     let campus = this.state.selectedStudent.campus;
//     if(!campus){
//       campus = "campus";
//     }
//     return (
//       <div>
//       <table className="table">
//         <thead>
//         <tr>
//           <th>NAME</th>
//           <th>EMAIL</th>
//           <th>CAMPUS</th>
//           <th>Update</th>
//           <th>Remove</th>
//         </tr>
//       </thead>
//       <tbody>
//       <tr>
//         <td>{student.name}</td>
//         <td>{student.email}</td>
//         <td>{campus.name}</td>
//           <td>
//               <Link to={`/update/${student.id}`}>
//                <button className="btn btn-default btn-xs">Update
//                </button>
//               </Link>
//           </td>
//           <td>
//               <Link to={`/update/${student.id}`}>
//                <button className="btn btn-default btn-xs">Delete
//                </button>
//               </Link>
//           </td>
//       </tr>
//       </tbody>
//       </table>
//       </div>
//     );
//   }
// }
