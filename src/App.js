import AddTodo from "./components/Todo/AddTodo";
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";
import { useEffect, useState } from "react";
import { collectionRef, db } from "./firebase/firebase.config";
import { getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [todoTitle, setTodoTitle] = useState("");

    let todos = [];

    function getTodosFromDB() {
        getDocs(collectionRef)
            .then((item) =>
                item.docs.map((item) =>
                    todos.push({ ...item.data(), id: item.id })
                )
            )
            .then(() => setTodoList(todos))
            .catch((err) => console.log(err));
    }

    async function addTodoHandler(e) {
        e.preventDefault();
        if (todoTitle === "") return;
        addDoc(collectionRef, { title: todoTitle, completed: false }).then(() =>
            getTodosFromDB()
        );
    }
    function changeTodoTitleHandler(e) {
        setTodoTitle(e.target.value);
    }
    function completeTodoHandler(e) {
        const id = e.target.id;
        const docRef = doc(db, "todoList", id);
        updateDoc(docRef, { completed: true }).then(() => getTodosFromDB());
    }
    function deleteTodoHandler(e) {
        const id = e.target.id;
        const docRef = doc(db, "todoList", id);
        deleteDoc(docRef).then(() => getTodosFromDB());
    }

    useEffect(() => {
        getTodosFromDB();
    }, []);

    return (
        <div>
            <Header />
            <AddTodo
                addTodoHandler={addTodoHandler}
                changeTodoTitleHandler={changeTodoTitleHandler}
            />
            <Todo
                todoList={todoList}
                completeTodoHandler={completeTodoHandler}
                deleteTodoHandler={deleteTodoHandler}
            />
        </div>
    );
}

export default App;
