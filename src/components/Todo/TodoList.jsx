import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList }) {
    return (
        <ul className="list-group">
            {todoList.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                    />
                );
            })}
        </ul>
    );
}

export default TodoList;
