
// reducers/userReducer.js
const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  loading: true,
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOADED':
      return { ...state, user: action.payload, loading: false };
    case 'AUTH_ERROR':
    case 'LOGIN_FAIL':
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, token: null, user: null, loading: false };
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return { ...state, token: action.payload.token, loading: false };
    default:
      return state;
  }
}
