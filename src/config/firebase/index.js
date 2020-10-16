import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDKfSdeI7X93WIr-HXqNTB6lIB17qoIJE0",
    authDomain: "reacthelloworld-ccab7.firebaseapp.com",
    databaseURL: "https://reacthelloworld-ccab7.firebaseio.com",
    projectId: "reacthelloworld-ccab7",
    storageBucket: "reacthelloworld-ccab7.appspot.com",
    messagingSenderId: "439523584756",
    appId: "1:439523584756:web:6898d5ff453b603fd18ca1",
    measurementId: "G-TDHFCX4BVB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;