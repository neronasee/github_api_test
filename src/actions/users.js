import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../consts/userConsts';
import axios from 'axios';

const ROOT_USERS_URL = 'https://api.github.com/users';

export const loadUsers = (offset=0) => (dispatch) => {
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
