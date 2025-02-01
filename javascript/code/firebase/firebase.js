import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import {
  addDoc,
  collection,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmTMoyix09rR1fdQc24UECYXtrkkx2pUk",
  authDomain: "stopwatch-7922f.firebaseapp.com",
  databaseURL: "https://stopwatch-7922f.firebaseio.com",
  projectId: "stopwatch-7922f",
  storageBucket: "stopwatch-7922f.firebasestorage.app",
  messagingSenderId: "317708428739",
  appId: "1:317708428739:web:81c43ccdf53892f958c976",
  measurementId: "G-5QE4L0LS12",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export async function signup(userDetails) {
  const { firstName, lastName, userName, email, password } = userDetails;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("===>> hurraayyyy user registered successfully");
    const {password, ...userDetailsWithoutPassword} = userDetails
    const docRef = await addDoc(collection(db, "users"), userDetailsWithoutPassword);
    console.log("===>> hurraayyyy user ka data store hogaya");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, "===>> aaahhhhh registeration failed");
    console.log(errorMessage, "===>> aaahhhhh registeration failed");
    alert(errorMessage);
  }
}

export function login(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("===>> Welcome to the game");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, "===>> errorCode");
      console.log(errorMessage, "===>> errorMessage");
    });
}
