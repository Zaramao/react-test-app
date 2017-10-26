import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyA_GT_rCK6DG3J9vztlRVxo5KRxWva5Q-c',
	authDomain: 'expensify-3a26e.firebaseapp.com',
	databaseURL: 'https://expensify-3a26e.firebaseio.com',
	projectId: 'expensify-3a26e',
	storageBucket: 'expensify-3a26e.appspot.com',
	messagingSenderId: '118582479458'
};

firebase.initializeApp(config);
const database = firebase.database();

database.ref().set({
	name: 'Ivan',
	isGood: true,
	location: {
		city: 'Belgrade',
		country: 'Serbia'
	}
});
