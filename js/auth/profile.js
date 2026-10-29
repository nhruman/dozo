// Firebase Import
import { auth, db } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Firebase Firestore Functions (NEW)
import {
    collection,
    query,
    where,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Firebase Connection Check
console.log("Profile JS Loaded!");
console.log("Firebase Project:", auth.app.options.projectId);


// HTML Elements
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userId = document.getElementById("user-id");

const profileContent = document.getElementById("profile-content");
const profileMessage = document.getElementById("profile-message");
const logoutButton = document.getElementById("logout-button");


// Check Login Status
onAuthStateChanged(auth, (user) => {

    console.log("Auth State Changed:", user);

    if (user) {

        // User Login করেছে
        userName.textContent = user.displayName || "ユーザー";
        userEmail.textContent = user.email || "";
        userId.textContent = user.uid;

        // Profile Show
        profileContent.hidden = false;

        // Loading Message Remove
        profileMessage.textContent = "";

         // NEW: User Dashboard Load
        loadDashboard(user.uid);

        console.log("Profile Loaded Successfully!");

    } else {

        // Login না থাকলে Login Page-এ যাবে
        console.log("User Not Logged In");

        window.location.replace("login.html");

    }

});


// Logout Function
logoutButton.addEventListener("click", async () => {

    logoutButton.disabled = true;

    try {

        await signOut(auth);

        console.log("Logout Successful!");

        window.location.replace("login.html");

    } catch (error) {

        console.error("Logout Error:", error);

        profileMessage.textContent =
            "ログアウトに失敗しました。もう一度お試しください。";

        logoutButton.disabled = false;

    }

});

// =====================================
// User Dashboard Data
// =====================================

async function loadDashboard(userId) {

    try {

        // Firestore থেকে User-এর Products খুঁজবে
        const productsRef = collection(db, "products");

        const q = query(
            productsRef,
            where("userId", "==", userId)
        );

        const snapshot = await getDocs(q);

        let totalProducts = 0;
        let totalValue = 0;
        let soldProducts = 0;
        let totalSales = 0;

        snapshot.forEach((doc) => {

            const product = doc.data();

            const price = Number(product.price) || 0;

            totalProducts++;
            totalValue += price;

            if (product.status === "sold") {

                soldProducts++;

                totalSales += Number(product.soldPrice ?? product.price) || 0;

            }

        });

        console.log("Total Products:", totalProducts);
        console.log("Total Value:", totalValue);
        console.log("Sold Products:", soldProducts);
        console.log("Total Sales:", totalSales);

    } catch (error) {

        console.error("Dashboard Error:", error);

    }

}