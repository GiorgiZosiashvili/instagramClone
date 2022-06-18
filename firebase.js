import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTJpMJOMUuJxf4giw06dDm5OwVqtUrIn4",
  authDomain: "nstagramclon3.firebaseapp.com",
  projectId: "nstagramclon3",
  storageBucket: "nstagramclon3.appspot.com",
  messagingSenderId: "993891596600",
  appId: "1:993891596600:web:d51c39160e50655c96e9cd",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;
