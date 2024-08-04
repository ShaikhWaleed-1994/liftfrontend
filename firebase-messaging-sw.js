importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js');

firebase.initializeApp({
    apiKey: "AIzaSyBtVUeKGp7cuGdKOlZ0LXdIOFbTVnq3HLE",
    authDomain: "lift-775f4.firebaseapp.com",
    projectId: "lift-775f4",
    storageBucket: "lift-775f4.appspot.com",
    messagingSenderId: "999012577620",
    appId: "1:999012577620:web:9d67235fdf982e83d458c1",
    measurementId: "G-K9CS9XHXM2",
    databaseURL: "https://lift-775f4-default-rtdb.europe-west1.firebasedatabase.app"
});

const messaging = firebase.messaging();