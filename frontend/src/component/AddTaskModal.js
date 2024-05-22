import React, { useState } from 'react';
import { Modal,  Form } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
const AddTaskModal = ({ show, handleClose, handleTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const user = JSON.parse(localStorage.getItem('userauth'));
            const userId = user.user._id;
            const config = {
                headers: { 
                    Authorization: `Bearer ${user.token}`
                }
            };

            const taskData = {
                title,
                description,
                dueDate
            };

            const response = await axios.post(`http://localhost:8080/api/tasks/create-task/${userId}`, taskData , config);
            console.log("response", response)
            if (response.status === 201) {
                toast.success("Task Created")
                handleTaskCreated();
            }
            handleClose();
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };


    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className=''>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='row ' onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </Form.Group>
                    <Form.Group className='my-3' controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </Form.Group>
                    <Form.Group controlId="formDueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
                    </Form.Group>
                    <button className='mx-auto btn btn-primary my-3 w-25' variant="primary" type="submit">
                        Submit
                    </button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddTaskModal;
