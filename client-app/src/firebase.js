import firebase from "firebase/app";
import "firebase/auth";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyDtHEWPdfTWtk14ZgjWy2qkdL0urT_313E",
  authDomain: "music-map-ef566.firebaseapp.com",
  projectId: "music-map-ef566",
  databaseURL: "https://music-map-ef566.firebaseio.com",
  storageBucket: "music-map-ef566.appspot.com",
  messagingSenderId: "693398608160",
  appId: "1:693398608160:web:52275bd897b4fc6a06df45",

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOAMIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = fire.auth();
export default fire;
