import React from "react";

function TodoItem({ completed = false, title }) {
    return completed ? (
        <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-success text-dark fw-bolder">
            <del> {title} </del>
            <span className="badge bg-success rounded-pill text">
                Completed
            </span>
        </li>
    ) : (
        <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-light text-dark fw-bolder">
            {title}
            <div>
                <button className="btn btn-sm btn-outline-success p-0 px-3 text-dark">
                    <i className="bi bi-check-lg"></i>
                </button>
                <button className="btn btn-md py-0 px-2 text-danger">
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
