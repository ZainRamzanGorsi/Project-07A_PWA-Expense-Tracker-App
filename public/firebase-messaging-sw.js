importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyCx1iE7aawnH6VDXWL4bbe6RSC-vuXKxNo",
  authDomain: "pwa-expense-app.firebaseapp.com",
  projectId: "pwa-expense-app",
  storageBucket: "pwa-expense-app.appspot.com",
  messagingSenderId: "539300929772",
  appId: "1:539300929772:web:83cc3e99e5566d821dc5c9"
};

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();