import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAC8af2ySeLfrVcrFQLM424IBNOeM_geek",
  authDomain: "todo-list-43ee9.firebaseapp.com",
  projectId: "todo-list-43ee9",
  storageBucket: "todo-list-43ee9.appspot.com",
  messagingSenderId: "171292389792",
  appId: "1:171292389792:web:22a59f0063a61753f4b4c5"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
