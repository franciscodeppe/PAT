import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyD1i75QARqTyyzi8-4nDejIKEyONZuq-kQ",
  authDomain: "patapp-d6f58.firebaseapp.com",
  databaseURL: "https://patapp-d6f58.firebaseio.com",
  projectId: "patapp-d6f58",
  storageBucket: "patapp-d6f58.appspot.com",
  messagingSenderId: "878766555187"
};

const devConfig = {
  apiKey: "AIzaSyD1i75QARqTyyzi8-4nDejIKEyONZuq-kQ",
  authDomain: "patapp-d6f58.firebaseapp.com",
  databaseURL: "https://patapp-d6f58.firebaseio.com",
  projectId: "patapp-d6f58",
  storageBucket: "patapp-d6f58.appspot.com",
  messagingSenderId: "878766555187"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
