import firebase from "firebase/app";
require("firebase/auth");
require("firebase/database");

const config = {
  apiKey: "AIzaSyADhkBhnWPpR6E-t_lO9vuf8Z4yTLi4S50",
  authDomain: "words-with-myself.firebaseapp.com",
  databaseURL: "https://words-with-myself.firebaseio.com",
  projectId: "words-with-myself",
  storageBucket: "words-with-myself.appspot.com",
  messagingSenderId: "617204252921"
};
firebase.initializeApp(config);

const db = firebase.database();

export default db;
