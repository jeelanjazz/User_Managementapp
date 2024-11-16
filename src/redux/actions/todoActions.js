export const addTask = (task) => ({ type: 'ADD_TASK', payload: task });
export const deleteTask = (id) => ({ type: 'DELETE_TASK', payload: id });
export const updateTask = (id, data) => ({ type: 'UPDATE_TASK', payload: { id, data } });
export const filterTasks = (filter) => ({ type: 'FILTER_TASKS', payload: filter });