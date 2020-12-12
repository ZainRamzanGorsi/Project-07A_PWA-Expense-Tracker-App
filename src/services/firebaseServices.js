
import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCx1iE7aawnH6VDXWL4bbe6RSC-vuXKxNo",
  authDomain: "pwa-expense-app.firebaseapp.com",
  projectId: "pwa-expense-app",
  storageBucket: "pwa-expense-app.appspot.com",
  messagingSenderId: "539300929772",
  appId: "1:539300929772:web:83cc3e99e5566d821dc5c9"
};


  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}

export default firebase