// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCt_7H-FeiRtcqf4fqVNBduOa4AVM4vw_w",
    authDomain: "linkedin-clone-7c398.firebaseapp.com",
    projectId: "linkedin-clone-7c398",
    storageBucket: "linkedin-clone-7c398.appspot.com",
    messagingSenderId: "929742399531",
    appId: "1:929742399531:web:9188aedff8b52eb4dca26e",
    measurementId: "G-6VMFD83X6X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
  export default firebase;

