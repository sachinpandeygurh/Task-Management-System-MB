import React, { useState, useEffect } from 'react';
import { Modal,  Form } from 'react-bootstrap';

const EditTaskModal = ({ show, handleClose, handleSubmit, task }) => {
    const [editedTask, setEditedTask] = useState({});

    useEffect(() => {
        setEditedTask(task);
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask({ ...editedTask, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(editedTask);
    };

    return (
        <Modal show={show} onHide={handleClose} style={{color: "white",backgroundColor: "#00000080"}}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='row' onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" name="title" value={editedTask?.title || ''} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className='my-3' controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={editedTask?.description || ''} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formStatus">
                        <Form.Label>Status</Form.Label>
                        <Form.Control as="select" name="status" value={editedTask?.status || ''} onChange={handleChange}>
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </Form.Control>
                    </Form.Group>
                    <button className='my-3 w-25 mx-auto btn btn-primary' variant="primary" type="submit">
                        Update Task
                    </button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditTaskModal;
