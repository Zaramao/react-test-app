import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyA_GT_rCK6DG3J9vztlRVxo5KRxWva5Q-c',
	authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'expensify-3a26e.firebaseapp.com',
	databaseURL: process.env.FIREBASE_DATABASE_URL || 'https://expensify-3a26e.firebaseio.com',
	projectId: process.env.FIREBASE_PROJECT_ID || 'expensify-3a26e',
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET || 'expensify-3a26e.appspot.com',
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || '118582479458'
};
firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
