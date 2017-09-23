import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
} from '../consts/userConsts';
import axios from 'axios';

const ROOT_USERS_URL = 'https://api.github.com/users';

export const loadProfile = (username) => (dispatch) => {
  dispatch({
    type: FETCH_PROFILE,
  });

  axios.get(`${ROOT_USERS_URL}/${username}`)
    .then((response) => {
      dispatch({
        type: FETCH_PROFILE_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: FETCH_PROFILE_ERROR
      })
    });
};
