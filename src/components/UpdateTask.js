import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { updateTaskInList } from '../slice/tasksSlice'
const UpdateModal = (props) => {
    const dispatch = useDispatch();
    const { selectedTask } = useSelector((state) => {
        return state.tasks
    });
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [taskId, setTaskId] = useState('');
    useEffect(() => {
        setTitle(selectedTask.title);
        setDescription(selectedTask.description);
        setTaskId(selectedTask.id);
    }, [selectedTask]);

    const updateTask = (e) => {
        e.preventDefault();
        dispatch(updateTaskInList({ id: taskId, title, description }));
        props.onHide()
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Task Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Task Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div className="text-end">
                    <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
                        Update Task
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default UpdateModal;