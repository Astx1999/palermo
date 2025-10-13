import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "palermo-23de3.firebaseapp.com",
    projectId: "palermo-23de3",
    storageBucket: "palermo-23de3.firebasestorage.app",
    messagingSenderId: "606874534071",
    appId: "1:606874534071:web:7292a70160b6fa4d7a4d32",
    measurementId: "G-HZDW0FR9JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
// const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Function to sign in with Google
// const signInWithGoogle = async () => {
//     try {
//         const result = await signInWithPopup(auth, provider);
//         console.log("User signed in:", result.user);
//     } catch (error) {
//         console.error("Error signing in:", error);
//     }
// };
export { db, collection, getDocs };
