import axios from 'axios';
import socket from '../socket';

// ACTION TYPES
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATORS
export function getCampus (campus) {
  const action = { type: GET_CAMPUSL, campus };
  return action;
}

export function getCampuses (campus) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

// THUNK CREATORS
export function fetchCampuses () {

  return function thunk (dispatch) {
    return axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  };
}

export function postCampus (campus, history) {

  return function thunk (dispatch) {
    return axios.post('/api/campus', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(getCampus(newCampus));
        socket.emit('new-campus', newCampus);
        history.push(`/campuses/${newCampus.id}`);
      });
  };
}

// REDUCER
export default function reducer (state = [], action) {

  switch (action.type) {

    case GET_CAMPUS:
      return action.campus;

    case GET_CAMPUSES:
      return [...state, action.campus];

    default:
      return state;
  }

}
