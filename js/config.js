// Firebase SDK Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "vishal-f0a01.firebaseapp.com",
    projectId: "vishal-f0a01",
    storageBucket: "vishal-f0a01.firebasestorage.app",
    messagingSenderId: "XXX",
    appId: "1:1073161731462:web:24dd8a1cadde0eea1f0007",
    measurementId: "XXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export so other JavaScript files can use Firebase
export { app, analytics };
