import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
  apiKey: "AIzaSyDLHO7bNx8z4vLtXuzQ6J99yZ8uUG_rAWM",
  authDomain: "pro71-4a4a5.firebaseapp.com",
  projectId: "pro71-4a4a5",
  storageBucket: "pro71-4a4a5.appspot.com",
  messagingSenderId: "931046329928",
  appId: "1:931046329928:web:9e780c9eef3e1d2558527d"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

