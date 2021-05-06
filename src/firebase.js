import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCWBZp-3Mo2iIDtr8R5wdvWX-eZp0NpmJ4",
    authDomain: "slack-clone-cbc0b.firebaseapp.com",
    projectId: "slack-clone-cbc0b",
    storageBucket: "slack-clone-cbc0b.appspot.com",
    messagingSenderId: "310594716767",
    appId: "1:310594716767:web:fefa65d0dd7b671cd987ea",
    measurementId: "G-7FPXDZWFWB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider }
export default db;