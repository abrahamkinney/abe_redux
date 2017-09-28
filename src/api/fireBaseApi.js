import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBqidLzsb7o5K5n0v4cqGcwlIkrM2tCnkg',
  authDomain: 'anne-marie-kinney.firebaseio.com/',
  databaseURL: 'https://anne-marie-kinney.firebaseio.com/'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const fireBaseApi = firebase.database();

export default fireBaseApi;
