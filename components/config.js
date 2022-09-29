import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBkIjkMt_UHJE4xdMxHuSrtsM0ACGtwBz0",
    authDomain: "shoppinglist-cdff3.firebaseapp.com",
    databaseURL: "https://shoppinglist-cdff3-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "shoppinglist-cdff3",
    storageBucket: "shoppinglist-cdff3.appspot.com",
    messagingSenderId: "408726865689",
    appId: "1:408726865689:web:fa569b902afb3e0dc86788",
    measurementId: "G-PMV8EEWXP1"
  };

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);