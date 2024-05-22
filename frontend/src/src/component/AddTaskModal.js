import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../Redux/actions';
import { toast } from 'react-toastify';

const AddTaskModal = ({ show, handleClose, handleTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      dueDate,
    };

    try {
      await dispatch(addTask(taskData));
    
      handleTaskCreated();
      handleClose();
    } catch (error) {
      toast.error('Error creating task');
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </Form.Group>
          <button
            className="mx-auto btn btn-primary my-3 w-25"
            variant="primary"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTaskModal;
