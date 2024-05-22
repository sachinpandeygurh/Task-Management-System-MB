import axios from 'axios';
import { toast } from 'react-toastify';
import { FETCH_TASKS_SUCCESS, DELETE_TASK_SUCCESS, UPDATE_TASK_SUCCESS, ADD_TASK_SUCCESS } from './types';

export const fetchTasks = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem('userauth'));
    const userId = user.user._id;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const response = await axios.get(`http://localhost:8080/api/tasks/get-tasks/${userId}`, config);
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    toast.error('Failed to fetch tasks');
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem('userauth'));
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.delete(`http://localhost:8080/api/tasks/del-task/${taskId}`, config);
    dispatch({ type: DELETE_TASK_SUCCESS, payload: taskId });
    toast.success('Task deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error);
    toast.error('Failed to delete task');
  }
};

export const updateTask = (taskData) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem('userauth'));
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    await axios.put(`http://localhost:8080/api/tasks/update-task/${taskData._id}`, taskData, config);
    dispatch({ type: UPDATE_TASK_SUCCESS, payload: taskData });
    toast.success('Task updated successfully');
  } catch (error) {
    console.error('Error updating task:', error);
    toast.error('Failed to update task');
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem('userauth'));
    const userId = user.user._id;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    };

    const response = await axios.post(`http://localhost:8080/api/tasks/create-task/${userId}`, taskData, config);
    if (response.status === 201) {
      toast.success("Task Created");
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) {
    console.error('Error creating task:', error);
    toast.error('Failed to create task');
  }
};
