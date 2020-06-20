import firebase from "@firebase/app";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAmQ4Z8WuL5RDfVOy7J7WdkxY7qR20lUpI",
  authDomain: "portfolio-2f2a2.firebaseapp.com",
  databaseURL: "https://portfolio-2f2a2.firebaseio.com",
  projectId: "portfolio-2f2a2",
  storageBucket: "portfolio-2f2a2.appspot.com",
  messagingSenderId: "18030874334",
  appId: "1:18030874334:web:d71d4433f8ad7f0ee97c4f",
  measurementId: "G-K07P9GV3ES"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebaseApp.firestore();
