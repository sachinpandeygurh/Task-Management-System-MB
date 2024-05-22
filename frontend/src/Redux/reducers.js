import { FETCH_TASKS_SUCCESS, DELETE_TASK_SUCCESS, UPDATE_TASK_SUCCESS } from './types';

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return { ...state, tasks: action.payload };
    case DELETE_TASK_SUCCESS:
      return { ...state, tasks: state.tasks.filter(task => task._id !== action.payload) };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.payload._id ? { ...task, ...action.payload } : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
