import { onBackgroundMessage } from "firebase/messaging/sw";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { firebaseConfig } from "../firebase.config";

initializeApp(firebaseConfig);

const messaging = getMessaging();

onBackgroundMessage(messaging, (payload) => {
    console.log("Received background message ", payload);

    // console.log({ ...payload.data });
    // Customize notification here
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.message,
        icon: "/firebase-logo.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
