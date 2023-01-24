import firebase from 'firebase/app';
import 'firebase/auth';


const config = {

    apiKey: "AIzaSyAX8EG-0leyDB-tWLxAX8w02lbUA_egbIU",
  
    authDomain: "mcity-ed494.firebaseapp.com",
  
    projectId: "mcity-ed494",
  
    storageBucket: "mcity-ed494.appspot.com",
  
    messagingSenderId: "347685467515",
  
    appId: "1:347685467515:web:714326927a27f4534939de",
  
    measurementId: "G-DB1GSSYMGD"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(config);


  export {
    firebase
  };
  
