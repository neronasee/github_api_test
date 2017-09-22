import { combineReducers } from 'redux';
import users from './users';
import profile from './profile';

const rootReducer = combineReducers({
  users,
  profile,
});

export default rootReducer;