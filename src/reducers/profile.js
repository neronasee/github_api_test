import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
} from '../consts/userConsts';

const initialState = {
  fetching: false,
  data: null,
};

export default (state=initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {...state, fetching: true}
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state, 
        fetching: false, 
        data: action.payload, 
        err: null
      }
    case FETCH_PROFILE_ERROR:
      return {...state, fetching: false, err: 'Error occured'}
    default:
      return state;
  }
};
