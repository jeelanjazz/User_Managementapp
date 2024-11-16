const initialState = {
  tasks: [],
  filter: 'all',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, ...action.payload.data } : task
        ),
      };
    case 'FILTER_TASKS':
      return { ...state, filter: action.payload };
    case 'LOGOUT_USER':
      return initialState;
    default:
      return state;
  }
};

export default todoReducer;
