import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDbIcGqC9zmk7NqU-rUn7H_5PEOAurceBA",
  authDomain: "haarstudio-dae65.firebaseapp.com",
  databaseURL: "https://haarstudio-dae65.firebaseio.com",
  projectId: "haarstudio-dae65",
  storageBucket: "haarstudio-dae65.appspot.com",
  messagingSenderId: "292715988614"
};
var fire = firebase.initializeApp(config);

export default fire;

