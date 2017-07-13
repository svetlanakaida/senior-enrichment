import axios from 'axios';
import socket from '../socket';

// ACTION TYPES
const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';

// ACTION CREATORS
export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

// THUNK CREATORS
export function fetchStudents () {

  return function thunk (dispatch) {
    return axios.get('/api/student')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action);
      });
  };
}

export function postCampus (student, history) {

  return function thunk (dispatch) {
    return axios.post('/api/student', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(getStudent(newStudent));
        socket.emit('new-student', newStudent);
        history.push(`/students/${newStudent.id}`);
      });
  };
}

// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_STUDENT:
      return action.campus;

    case GET_STUDENTS:
      return [...state, action.student];

    default:
      return state;
  }

}
