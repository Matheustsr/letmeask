import firebase from "firebase";

import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyCvJ31ZJqPO1FujCFnBVfhHr0PKxYCqzho",
    authDomain: "letmeask-e89a5.firebaseapp.com",
    databaseURL: "https://letmeask-e89a5-default-rtdb.firebaseio.com",
    projectId: "letmeask-e89a5",
    storageBucket: "letmeask-e89a5.appspot.com",
    messagingSenderId: "518806028376",
    appId: "1:518806028376:web:25226abfbfe41be0760a2d"
  };

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const database = firebase.database();