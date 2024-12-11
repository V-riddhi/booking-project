import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getReactNativePersistence, initializeAuth 0 } from "firebase/app";
// import { getFireStore } from "firebase/firestore";
// import { getFirestore } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCPy_HibH_OJdyUFNQQ-C1BbOj1zKe_9a8",
  authDomain: "booking-project-d76c7.firebaseapp.com",
  projectId: "booking-project-d76c7",
  storageBucket: "booking-project-d76c7.appspot.com",
  messagingSenderId: "499129680679",
  appId: "1:499129680679:web:0cec48b41ca3c324499f02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

//  const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage),
//   }); 

const db = getFirestore();

export { auth, db };


// import { initializeApp, getApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyCPy_HibH_OJdyUFNQQ-C1BbOj1zKe_9a8",
//   authDomain: "booking-project-d76c7.firebaseapp.com",
//   projectId: "booking-project-d76c7",
//   storageBucket: "booking-project-d76c7.appspot.com",
//   messagingSenderId: "499129680679",
//   appId: "1:499129680679:web:0cec48b41ca3c324499f02",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication
// let auth;
// try {
//   auth = getAuth(app);
// } catch (error) {
//   console.error("Error initializing Firebase Authentication:", error);
//   // Handle the error appropriately, e.g., show a user-friendly message.
// }

// // Initialize Firestore
// let db;
// try {
//   db = getFirestore();
// } catch (error) {
//   console.error("Error initializing Firestore:", error);
//   // Handle the error appropriately, e.g., show a user-friendly message.
// }

// export { auth, db };
