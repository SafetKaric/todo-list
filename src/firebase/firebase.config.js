import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

initializeApp(firebaseConfig);

export const db = getFirestore();

export const collectionRef = collection(db, "todoList");

// addDoc(collectionRef, {
//     id: Math.random(),
//     title: "This is from code",
//     completed: false,
//     time: Date.now().toLocaleString(),
// }).then((e) => console.log(e));
