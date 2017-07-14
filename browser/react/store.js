import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//INITIAL STATE

const initialState = {
  campuses: [],
  campus: {},
  students: [],
  student: {}
};

//ACTIONS

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';

//  ACTION CREATORS

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus (campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getStudent (student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

//  THUNK CREATORS

export const getAllCampuses = () => {
  return dispatch => {
    axios.get(`/api/campuses/`)
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses));
      })
  };
};

export const getOneCampus = campusId => {
  return dispatch => {
    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        dispatch(getCampus(campus));
      })
  };
};


export const getAllStudents = () => {
  return dispatch => {
    axios.get(`/api/students`)
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students));
      })
  };
};

export const getOneStudent = studentId => {
  return dispatch => {
    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        dispatch(getStudent(student));
      })
  };
};


// REDUCER


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses });

    case GET_CAMPUS:
      return Object.assign({}, state, { campus: action.campus });

    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students });

    case GET_STUDENT:
      return Object.assign({}, state, { student: action.student });

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

export default store;
