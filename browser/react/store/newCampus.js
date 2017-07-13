// ACTION TYPES

const ADD_CAMPUS = 'ADD_CAMPUS';

// ACTION CREATORS

export function addCampus (campusName) {
  const action = { type: ADD_CAMPUS, campusName };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case ADD_CAMPUS:
      return action.campusName;

    default:
      return state;
  }

}
