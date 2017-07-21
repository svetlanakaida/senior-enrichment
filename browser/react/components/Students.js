import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddStudentForm from './AddStudentForm';
import DeleteStudent from './DeleteStudent';

export default class Students extends Component {

  constructor () {
    super();
    this.state = {
      students: [],
      campuses: []
    };
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount () {

    axios.get('/api/student/')
      .then(res => res.data)
      .then(student => {
          this.setState({ students: student })
      })

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
   addStudent (name, email, campusId) {
    return  axios.post('/api/student/', {
     name, email, campusId
    })
    .then(res => res.data)
    .then(student => {
      const students = this.state.students;
      const newStudent = [...students, student ];
     this.setState({ students: newStudent });
    });
  }

  deleteStudent (studentId) {
    return  axios.delete(`/api/student/${studentId}`)
    // .then(res => res.data)
    .then(students => {
     var filteredStudents = this.state.students.filter(
      student => student.id !== studentId
    )
    this.setState({students: filteredStudents})
    .then((deletedStudent) => {
     }
    )
    })
    .catch(err => console.log(err))
  }

  render () {
console.log("PROPS")
    const students = this.state.students;
    const campuses = this.props.campuses;

    return (
      <div>
      <div>
      <AddStudentForm  addStudent ={this.addStudent} campuses = {this.state.campuses} />
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>CAMPUS</th>
            <th> DELETE </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{
          students.map(student => (
              <tr  key={student.id}>
                <td>{ student.name}</td>
                <td>{student.email }</td>
                <td>{student.campus.name}</td>
                <td>  <DeleteStudent deleteStudent ={this.deleteStudent}  studentId= {student.id} /></td>
                <td>
                <Link to={`/students/${student.id}`}>
                  <button type="button" className="btn btn-default" aria-label="Left Align">View
                  </button>
                </Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      </div>
    );
  }
}

// import store from '../store';
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import AddForm from './AddForm';

// export default class Students extends Component {

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

//     const students = this.state.students;

//     return (
//        <div>
//       <div>
//       <AddForm students={students} addStudent ={this.addStudent} />
//       </div>
//       <table className='table'>
//         <thead>
//           <tr>
//             <th>NAME</th>
//             <th>EMAIL</th>
//             <th>CAMPUS</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>{
//           students.map(student => (
//               <tr  key={student.id}>
//                 <td>{ student.name}</td>
//                 <td>{student.email }</td>
//                 <td>{student.campus.name}</td>
//                 <td>
//                 <Link to={`/students/${student.id}`}>
//                   <button type="button" className="btn btn-default" aria-label="Left Align">View
//                   </button>
//                 </Link>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//       </div>
//     );
//   }
// }

