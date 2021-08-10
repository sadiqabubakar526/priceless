import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyArfGq0S50E_uTknPKCdHvutlnNDSNaIC8",
    authDomain: "sauq-34823.firebaseapp.com",
    projectId: "sauq-34823",
    storageBucket: "sauq-34823.appspot.com",
    messagingSenderId: "348141601097",
    appId: "1:348141601097:web:50a1cdf20c8a555315da98",
    measurementId: "G-HZM6813HW5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;