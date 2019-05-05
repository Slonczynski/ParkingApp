import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBblWFgGmUpS0dzCqkb18XgtonerAcwuUM",
  authDomain: "parkingapp-5d88e.firebaseapp.com",
  databaseURL: "https://parkingapp-5d88e.firebaseio.com",
  projectId: "parkingapp-5d88e",
  storageBucket: "parkingapp-5d88e.appspot.com",
  messagingSenderId: "484914218682",
  appId: "1:484914218682:web:3c5f27f76e386679"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings();

export default firebase;
