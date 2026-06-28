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

console.log("Admin verified:", user.email);

loadTrainingData();
// ==========================
// LOAD TRAINING DATA
// ==========================

async function loadTrainingData() {

    const { data, error } = await supabaseClient
        .from("trainingdata")
        .select("*")
        .order("id", { ascending: true });

    const container = document.getElementById("admin-list");

    if (error) {

        container.innerHTML = error.message;
        return;

    }

    container.innerHTML = "";

    data.forEach(item => {

        container.innerHTML += `

            <div class="card" id="row-${item.id}">

                <h3>${item.title}</h3>

                <p>${item.desc || ""}</p>

                <p>
                    <b>Tech:</b>
                    ${item.tech || ""}
                </p>

                <p>
                    <a href="${item.link}"
                       target="_blank">
                       ${item.link || ""}
                    </a>
                </p>

                <button
                    class="btn edit-btn"
                    data-id="${item.id}">
                    Edit
                </button>

                <button
                    class="btn delete-btn"
                    data-id="${item.id}">
                    Delete
                </button>

                <br><br>

            </div>

        `;

    });

}
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
