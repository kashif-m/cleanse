const firebase = require('firebase')
var config = {
  apiKey: "AIzaSyAL7Z4EBCRrXv9bGRcya2le-4tpYflIcxo",
  authDomain: "appz-c7075.firebaseapp.com",
  databaseURL: "https://appz-c7075.firebaseio.com",
  projectId: "appz-c7075",
  storageBucket: "appz-c7075.appspot.com",
  messagingSenderId: "631535577177"
}

firebase.initializeApp(config)

export default firebase
