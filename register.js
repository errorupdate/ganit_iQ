
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDBT7PmNslHO3pAXOes0EK0sp30dq916Lg",
    authDomain: "ganitiq-b3e7a.firebaseapp.com",
    projectId: "ganitiq-b3e7a",
    storageBucket: "ganitiq-b3e7a.firebasestorage.app",
    messagingSenderId: "235594279790",
    appId: "1:235594279790:web:31fca8f6e79134709c6f7f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
// inputs
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
//submit
const submit = document.getElementById('submit');
submit.addEventListener('click',function(event) {
    event.preventDefault();
    alert(5);
})