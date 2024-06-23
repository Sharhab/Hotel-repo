// src/reducers/taskReducer.js
const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'UPDATE_TASK':
      return state.map(task =>
        task.id === action.payload.taskId ? { ...task, name: action.payload.updatedTask } : task
      );
    default:
      return state;
  }
};

export default taskReducer;
