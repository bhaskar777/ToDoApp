
import * as firebase from 'firebase'
import firestore from 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyD0giwA0ascywcZTDFyvjnmFxO3XVJD7ag",
    authDomain: "todoapp-c31cd.firebaseapp.com",
    projectId: "todoapp-c31cd",
    storageBucket: "todoapp-c31cd.appspot.com",
    messagingSenderId: "553071548288",
    appId: "1:553071548288:web:c0c990b5d3f7229d905365",
    measurementId: "G-F5C0LZPGCH"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;
