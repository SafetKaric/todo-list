import AddTodo from "./components/Todo/AddTodo";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";
import { collectionRef } from "./firebase/firebase.config";
import { getDocs } from "firebase/firestore";

function App() {
    const [todoList, setTodoList] = useState([]);
    let todos = [];

    useEffect(() => {
        getDocs(collectionRef)
            .then((item) =>
                item.docs.map((item) =>
                    todos.push({ ...item.data(), id: item.id })
                )
            )
            .then(() => setTodoList(todos))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <Header />
            <AddTodo />
            <Todo todoList={todoList} />
        </div>
    );
}

export default App;
