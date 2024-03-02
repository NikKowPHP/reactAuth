// import { initializeApp } from "firebase/app";

// const app = initializeApp({
// 	apiKey: import.meta.env.FIREBASE_API_KEY,
// 	authDomain: import.meta.env.AUTH_DOMAIN,
// 	projectId: import.meta.env.PROJECT_ID,
// 	storageBucket: import.meta.env.STORAGE_BUCKET,
// 	messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
// 	appId: import.meta.env.APP_ID,
// });


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0nIGFlnqAMZw61nsKUv5zjK9jiFpvDn4",
  authDomain: "shop-development-d1527.firebaseapp.com",
  projectId: "shop-development-d1527",
  storageBucket: "shop-development-d1527.appspot.com",
  messagingSenderId: "367198258793",
  appId: "1:367198258793:web:50b0f76ae6f1f464cac4f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
