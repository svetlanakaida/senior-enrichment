import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { campusesReducer } from './campuses';
import { studentsReducer } from './students';


const reducer = combineReducers({
    campusesReducer, studentsReducer
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware,
        createLogger()
    ))
);

export default store;

// export action creators
// export * from './channels';
// export * from './currentChannel';
// export * from './messages';
// export * from './name';
// export * from './newChannelEntry';
// export * from './newMessageEntry';
