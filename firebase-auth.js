// Firebase SDK

import { initializeApp }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import { getAnalytics }
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";

import {

    getAuth,

    GoogleAuthProvider,

    GithubAuthProvider,

    signInWithPopup,

    signOut,

    onAuthStateChanged

}
from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const auth = getAuth(app);


// Providers

const googleProvider =
new GoogleAuthProvider();

const githubProvider =
new GithubAuthProvider();


// Google Login

window.loginGoogle = async () => {

    try {

        await signInWithPopup(auth, googleProvider);

    } catch(err) {

        console.error(err);

    }

};


// GitHub Login

window.loginGithub = async () => {

    try {

        await signInWithPopup(auth, githubProvider);

    } catch(err) {

        console.error(err);

    }

};


// Logout

window.logout = async () => {

    await signOut(auth);

};


// User State

// Connect the button once the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("google-login");

    if (button) {
        button.addEventListener("click", window.loginGoogle);
    }

});

// User State
onAuthStateChanged(auth, user => {

    const info = document.getElementById("user-info");
    const button = document.getElementById("google-login");

    if (user) {

        info.innerHTML = `
            Welcome <b>${user.displayName}</b><br>
            ${user.email}
        `;

        button.textContent = "Logout";

        button.onclick = window.logout;

    } else {

        info.innerHTML = "";

        button.textContent = "Sign in with Google";

        button.onclick = window.loginGoogle;

    }

});
