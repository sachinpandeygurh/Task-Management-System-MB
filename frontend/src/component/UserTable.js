import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchTasks, deleteTask, updateTask } from '../Redux/actions';
import AddTaskModal from './AddTaskModal';
import EditTaskModal from './EditTaskModel';
import { toast } from 'react-toastify';

const UserTable = ({ tasks, fetchTasks, deleteTask, updateTask }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleDeleteTask = async (taskId) => {
    try {
      const response = await deleteTask(taskId);
      if (response.status === 200) {
        fetchTasks();
        toast.success("Task Deleted");
      } else {
        toast.error("Failed to delete task");
        console.error(response.statusText);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleEditTask = (task) => {
    setEditTask(task);
    setShowEditModal(true);
  };

  const handleEditTaskSubmit = async (editedTaskData) => {
    try {
      const response = await updateTask(editedTaskData);
      if (response.status === 200) {
        toast.success("Task Updated");
        fetchTasks();
        handleCloseEditModal();
      } else {
        toast.error('Failed to update task');
        console.error(response.statusText);
      }
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <AddTaskModal show={showModal} handleClose={handleCloseModal} handleTaskCreated={fetchTasks} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="text-center">Title</th>
            <th className="text-center">Description</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        {tasks.length > 0 ? (
          <tbody>
            {tasks.map(task => (
              <tr key={task._id} className='text-center'>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td className={`${task.status === 'completed' ? "text-success" : "text-warning"}`}>{task.status}</td>
                <td className='text-center '>
                  <button className='btn' variant="primary" onClick={() => handleEditTask(task)}><i className="bi bi-pencil-square text-primary"></i></button>{' '}
                  <button className='btn'  variant="danger" onClick={() => handleDeleteTask(task._id)}><i className="bi text-danger fa-2x bi-trash3-fill"></i></button>
                </td>
              </tr>
            ))}
            <EditTaskModal show={showEditModal} handleClose={handleCloseEditModal} handleSubmit={handleEditTaskSubmit} task={editTask} />
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="4" className="text-center">You have no tasks pending.</td>
            </tr>
          </tbody>
        )}
      </Table>
      <div className='d-flex justify-content-end'>
        <button  className="mx-3 mt-3 btn text-white" onClick={handleShowModal}><i className="bi bg-primary p-2 rounded bi-clipboard-plus bi-2x"></i></button>  
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps, { fetchTasks, deleteTask, updateTask })(UserTable);
