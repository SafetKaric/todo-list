import React from "react";
import TodoList from "./TodoList";

function Todo({ todoList }) {
    return (
        <section className="container mt-5">
            <TodoList todoList={todoList} />
        </section>
    );
}

export default Todo;
