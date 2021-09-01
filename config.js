import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC76JQ3IzhLQ2axZQZplFLOWsq_V5XqB04",
    authDomain: "votingapp-961c8.firebaseapp.com",
    databaseURL: "https://votingapp-961c8-default-rtdb.firebaseio.com",
    projectId: "votingapp-961c8",
    storageBucket: "votingapp-961c8.appspot.com",
    messagingSenderId: "396406868669",
    appId: "1:396406868669:web:c338cc40be7fb78df605d4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();