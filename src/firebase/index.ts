import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: import.meta.env.VUE_APP_API_KEY,
    authDomain: "synergydorm-vue.firebaseapp.com",
    projectId: "synergydorm-vue",
    storageBucket: "synergydorm-vue.appspot.com",
    messagingSenderId: "1039495987720",
    appId: "1:1039495987720:web:5690dbc67d9a61b1a4c7bd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }