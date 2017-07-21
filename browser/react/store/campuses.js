import axios from 'axios';


//ACTIONS


const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

//  ACTION CREATORS


export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus(campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}


export function addCampus (campus){
 const action = { type: ADD_CAMPUS,
  newCampus: campus };
  return action;
}

export function removeCampus (id){
  const action = {type: REMOVE_CAMPUS, id: id };
  return action;
}

//  THUNK CREATORS


export function getAllCampuses () {
  return function thunk (dispatch) {
     return axios.get('/api/campus')
      .then(res => res.data)
      .then(campuses => {
          const action = getCampuses(campuses);
        dispatch(action);
      })
  };
}

export function getOneCampus (campusId) {
  return function thunk (dispatch) {
     return axios.get(`/api/campus/${campusId}`)
      .then(res => res.data)
      .then(campus => {
          const action = getCampus(campus);
        dispatch(action);
      });
  };
}

export function createCampus (campus) {
  return function thunk (dispatch) {
     return axios.post('/api/campus/', campus)
      .then(res => res.data)
      .then(newCampus => {
          const action = addCampus(newCampus);
        dispatch(action);
      });
  };
}

export function deleteCampus(campusId) {
  return function thunk (dispatch) {
     dispatch(removeCampus(campusId));
     axios.delete(`/api/campus/${campusId}`)
      .catch(err => console.error(`Removing user: ${campusId} unsuccesful`, err));
  };
}


// REDUCER


export const campusesReducer = (state = [], action) => {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case GET_CAMPUS:
      return  action.campus;

    case ADD_CAMPUS:
      return [...state, action.campus];

    case REMOVE_CAMPUS:
     return state.filter(campus => campus.id !== action.id);
    default:
      return state;
  }
};

