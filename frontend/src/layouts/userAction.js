
// actions/userActions.js
import axios from 'axios';

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const res = await axios.get('/api/users/dashboard', {
        headers: { Authorization: token },
      });
      dispatch({ type: 'USER_LOADED', payload: res.data });
    } catch (err) {
      dispatch({ type: 'AUTH_ERROR' });
    }
  } else {
    dispatch({ type: 'AUTH_ERROR' });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users/login', { email, password });
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL' });
  }
};

export const register = (name, email, password, role) => async (dispatch) => {
  try {
    await axios.post('/api/users/register', { name, email, password, role });
    dispatch(login(email, password));
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL' });
  }
};   

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};

