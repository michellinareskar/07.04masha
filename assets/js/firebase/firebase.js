// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAEaZR3IJMF6ah71fD8R-oJFPavnr23KMU",

    authDomain: "masha11-03.firebaseapp.com",

    projectId: "masha11-03",

    storageBucket: "masha11-03.appspot.com",

    messagingSenderId: "674731848604",

    appId: "1:674731848604:web:4a1f0da5e3aeb7b7b9ce59"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

// Funciones del CRUD
export const createTask = (title, description, userName, date, time) => addDoc(collection(db, "tasks"), {title, description, userName, date, time});

export const getTask = id => getDoc(doc(db, "tasks", id));

export const onGetTask = callback => onSnapshot(collection(db, "tasks"), callback);

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));