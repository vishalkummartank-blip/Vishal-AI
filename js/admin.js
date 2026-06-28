// ==========================
// ADMIN EMAIL
// ==========================

const ADMIN_EMAIL = "vishalkummartank@gmail.com";


// ==========================
// FIREBASE
// ==========================

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// ==========================
// AUTH CHECK
// ==========================

onAuthStateChanged(auth, (user) => {

    // Nobody logged in
    if (!user) {
        window.location.href = "index.html";
        return;
    }

    // Wrong user
    if (user.email !== ADMIN_EMAIL) {
        window.location.href = "index.html";
        return;
    }

    // Correct admin
    console.log("Admin verified:", user.email);

});
