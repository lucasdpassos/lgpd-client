import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBrRfD-rxsWeMUFB4XgdTYC6a43lMHhHAc",
    authDomain: "lgpd-client.firebaseapp.com",
    databaseURL: "https://lgpd-client.firebaseio.com",
    projectId: "lgpd-client",
    storageBucket: "lgpd-client.appspot.com",
    messagingSenderId: "142350792093",
    appId: "1:142350792093:web:a8411fe3ec76fd5bc7eb74"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const base = firebase.database()

export {
    db, auth, base
}