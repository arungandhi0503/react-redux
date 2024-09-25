import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import UpdateModal from './UpdateTask';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedTask } from "../slice/tasksSlice";

const TasksList = () => {
    const dispatch = useDispatch();
    const { tasksList } = useSelector((state) => {
        return state.tasks;
    });

    const updateTask = (task) => {
        console.log("update Task", task);
        dispatch(setSelectedTask(task))
        setModalShow(true)
    };


    const deleteTask = () => {
        console.log("delete task");
    };

    const [modalShow, setModalShow] = useState(false)
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksList && tasksList.map((task, index) => {
                        return (
                            <tr className="text-center" key={task.id}>
                                <td>{index + 1}</td>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        className="mx-3"
                                        onClick={() => updateTask(task)}
                                    >
                                        <i className="bi bi-pencil-fill"></i>
                                    </Button>
                                    <Button variant="primary">
                                        <i className="bi bi-trash3" onClick={() => deleteTask()}></i>
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

            <UpdateModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default TasksList;