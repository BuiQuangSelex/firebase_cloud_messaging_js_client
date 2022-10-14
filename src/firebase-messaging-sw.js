import { onBackgroundMessage } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
    apiKey: "AIzaSyAtDKP9YiaDYqv2nWhgLHcXATstLiiVa_I",
    authDomain: "fir-tutorial-5fd63.firebaseapp.com",
    projectId: "fir-tutorial-5fd63",
    storageBucket: "fir-tutorial-5fd63.appspot.com",
    messagingSenderId: "862342591646",
    appId: "1:862342591646:web:85af73192598cc6396778f",
};

initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging();

onBackgroundMessage(messaging, (payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    // Customize notification here
    // const notificationTitle = "Background Message Title";
    // const notificationOptions = {
    //     body: "Background Message body.",
    //     icon: "/firebase-logo.png",
    // };

    // self.registration.showNotification(notificationTitle, notificationOptions);
});
