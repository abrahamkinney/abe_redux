import {combineReducers} from 'redux';
import events from './eventReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  events,
  authors
});

export default rootReducer;
