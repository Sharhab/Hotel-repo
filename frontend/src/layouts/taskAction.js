// src/actions/taskActions.js
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: { id: new Date().toISOString(), name: task },
});

export const updateTask = (taskId, updatedTask) => ({
  type: 'UPDATE_TASK',
  payload: { taskId, updatedTask },
});
