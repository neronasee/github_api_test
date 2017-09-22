import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../consts/userConsts';

const initialState = {
  fetching: false,
  list: [],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, fetching: true}
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        list: action.payload,
        err: null,
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        fetching: false, 
        err: 'Error occured',
      }
    default:
      return state;
  }
};
