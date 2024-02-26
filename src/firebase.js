import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.PROJECT_ID,
	messagingSenderId: process.env.PROJECT_ID,
	appId: process.env.PROJECT_ID,
});

export const auth = app.auth();
export default app;
