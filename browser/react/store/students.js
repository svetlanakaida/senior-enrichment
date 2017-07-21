import axios from 'axios';


//ACTIONS


const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

//  ACTION CREATORS


export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}


export function addStudent (student){
 const action = { type: ADD_STUDENT,
  newStudent: student };
  return action;
}

export function removeStudent (id){
  const action = {type: REMOVE_STUDENT, id: id };
  return action;
}

//  THUNK CREATORS


export function getAllStudents () {
  return function thunk (dispatch) {
     return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
          const action = getStudents(students);
        dispatch(action);
      })
  };
}

export function getOneStudents (studentId) {
  return function thunk (dispatch) {
     return axios.get(`/api/student/${studentId}`)
      .then(res => res.data)
      .then(student => {
          const action = getStudent(student);
        dispatch(action);
      });
  };
}

export function createStudent (student) {
  return function thunk (dispatch) {
     return axios.post('/api/student/', student)
      .then(res => res.data)
      .then(newStudent => {
          const action = addStudent(newStudent);
        dispatch(action);
      });
  };
}

export function deleteStudent (studentId) {
  return function thunk (dispatch) {
     dispatch(removeStudent(studentId));
     axios.delete(`/api/student/${studentId}`)
      .catch(err => console.error(`Removing user: ${studentId} unsuccesful`, err));
  };
}


// REDUCER


export const studentsReducer = (state = [], action) => {
  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return  action.student;

    case ADD_STUDENT:
      return [...state, action.student];

    case REMOVE_STUDENT:
     return state.filter(student => student.id !== action.id);
    default:
      return state;
  }
};

