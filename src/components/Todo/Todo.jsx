import React from "react";
import TodoList from "./TodoList";

function Todo({ todoList, completeTodoHandler, deleteTodoHandler }) {
    return (
        <section className="container mt-5">
            <TodoList
                todoList={todoList}
                completeTodoHandler={completeTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
            />
        </section>
    );
}

export default Todo;
