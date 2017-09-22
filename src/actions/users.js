import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../consts/userConsts';
import axios from 'axios';
// TODO: refactor with passsing params (how much users)

const ROOT_USERS_URL = 'https://api.github.com/users';
// https://api.github.com/users/:username
export const loadUsers = (offset=0) => (dispatch) => {
  // TODO: refactor with pagination or not hardcode
  // TODO: refactor with infinite scroll
  dispatch({
    type: FETCH_USERS
  });

  axios.get(`${ROOT_USERS_URL}?per_page=100&since=${offset}`)
    .then((response) => {
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: response.data,
      })
    })
    .catch((error) => {
      dispatch({
        type: FETCH_USERS_ERROR
      })
    });
};
