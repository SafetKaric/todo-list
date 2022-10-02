import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, completeTodoHandler, deleteTodoHandler }) {
    return (
        <ul className="list-group">
            {todoList.length > 0 ? (
                todoList.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            completed={todo.completed}
                            title={todo.title}
                            id={todo.id}
                            completeTodoHandler={completeTodoHandler}
                            deleteTodoHandler={deleteTodoHandler}
                        />
                    );
                })
            ) : (
                <h5 className="text-center">No todos add one</h5>
            )}
        </ul>
    );
}

export default TodoList;
