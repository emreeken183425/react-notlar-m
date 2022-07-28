// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyCuFdDtaAZnD4FH9BTI3471mTXjaT1koMU",
//   authDomain: "react-contact-project-38467.firebaseapp.com",
//   databaseURL: "https://react-contact-project-38467-default-rtdb.firebaseio.com",
//   projectId: "react-contact-project-38467",
//   storageBucket: "react-contact-project-38467.appspot.com",
//   messagingSenderId: "63519990099",
//   appId: "1:63519990099:web:1ace07f96783dc7d8a01a6"
apiKey: process.env.REACT_APP_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
databaseURL: process.env.REACT_APP_DATABASE_URL,
projectId: process.env.REACT_APP_PROJECT_ID,
storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_MESSAGİNG_SENDER_ID,
appId: process.env.REACT_APP_APP_ID,


};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;