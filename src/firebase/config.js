import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAdriff-o3S70SNGZNcAD_ADC31bJxNFLQ",
  authDomain: "photogallery-ddf6f.firebaseapp.com",
  databaseURL: "https://photogallery-ddf6f.firebaseio.com",
  projectId: "photogallery-ddf6f",
  storageBucket: "photogallery-ddf6f.appspot.com",
  messagingSenderId: "232456427381",
  appId: "1:232456427381:web:2e4364e3077c3f7085a53c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, auth, timestamp };
