import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBI0TDNkaqgDSAugQjI-TV2EDjS5y2b8Po",
    authDomain: "todo-list-e9fab.firebaseapp.com",
    projectId: "todo-list-e9fab",
    storageBucket: "todo-list-e9fab.appspot.com",
    messagingSenderId: "162810527198",
    appId: "1:162810527198:web:353cfee8065fd3c6a5714f",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const collectionRef = collection(db, "todoList");

// addDoc(collectionRef, {
//     id: Math.random(),
//     title: "This is from code",
//     completed: false,
//     time: Date.now().toLocaleString(),
// }).then((e) => console.log(e));
