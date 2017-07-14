// ACTION TYPES

const ADD_STUDENT = 'ADD_STUDENT';

// ACTION CREATORS

export function addStudent (studentName) {
  const action = { type: ADD_STUDENT, studentName };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case ADD_STUDENT:
      return action.studentName;

    default:
      return state;
  }

}
