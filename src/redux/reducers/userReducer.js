const initialState = {
  user: null,
  isAuthenticated: false,
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT_USER':
      return initialState;
    case 'UPDATE_PROFILE':
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
};

export default userReducer;
