import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9e_MXvGLQO6iuYxgWD0qPmq2hoZux4iA",
  authDomain: "blogspace-cb865.firebaseapp.com",
  databaseURL: "https://blogspace-cb865-default-rtdb.firebaseio.com",
  projectId: "blogspace-cb865",
  storageBucket: "blogspace-cb865.appspot.com",
  messagingSenderId: "64566211536",
  appId: "1:64566211536:web:2cb398ab087e0d753b7fd5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase