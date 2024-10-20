import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
    const { tasksList, error } = useSelector((state) => {
        return state.tasks;
    });

    return (
        <>
            <h1 className="text-center my-4 text-primary">Project Management</h1>
            <p className="text-center lead">Currently {tasksList.length} task(s) pending</p>
            {
                (error !== '') ? <h5 className="text-center">{error}</h5> : ''
            }
        </>
    );
};

export default Navbar;