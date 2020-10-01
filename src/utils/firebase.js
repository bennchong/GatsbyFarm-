import firebase from 'firebase/app';
import 'firebase/auth'; // importing the auth module as an example

// Firebase web config
const config = {
    apiKey: "AIzaSyBvXpRELIAj7JgOPRD77yVq8EHHuMzjKTo",
    authDomain: "gatsbyfarm-6cf01.firebaseapp.com",
    databaseURL: "https://gatsbyfarm-6cf01.firebaseio.com",
    projectId: "gatsbyfarm-6cf01",
    storageBucket: "gatsbyfarm-6cf01.appspot.com",
    messagingSenderId: "816110746851",
    appId: "1:816110746851:web:0c6a3083b65be790b259d6",
    measurementId: "G-V24J8R27NG"
}

let instance = null;

export default function getFirebase() {
    if (typeof window !== 'undefined') {
        if (instance) return instance;
        instance = firebase.initializeApp(config);
        return instance;
    }

    return null;
}