export const loginUser = (userData) => ({
  type: 'LOGIN_USER',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const updateProfile = (updatedData) => ({
  type: 'UPDATE_PROFILE',
  payload: updatedData,
});

