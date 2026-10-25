import { auth } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    updateProfile
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";


const registerForm = document.getElementById("register-form");
const message = document.getElementById("register-message");
const registerButton = document.getElementById("register-button");


registerForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const role = document.getElementById("role").value;

    message.textContent = "";
    message.style.color = "red";

    if (!name) {
        message.textContent = "お名前を入力してください。";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "パスワードが一致しません。";
        return;
    }

    registerButton.disabled = true;

    try {

        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        await updateProfile(user, {
            displayName: name
        });

        message.style.color = "green";
        message.textContent = "アカウントを作成しました！";

        console.log("Registered User:", user.uid);
        console.log("Name:", name);
        console.log("Selected Role:", role);

        // Login/Profile System তৈরির পর এখানে Redirect যুক্ত করব।

    } catch (error) {

        console.error("Registration Error:", error.code);

        if (error.code === "auth/email-already-in-use") {
            message.textContent = "このメールアドレスはすでに登録されています。";
        } else if (error.code === "auth/weak-password") {
            message.textContent = "パスワードを確認してください。";
        } else if (error.code === "auth/invalid-email") {
            message.textContent = "正しいメールアドレスを入力してください。";
        } else {
            message.textContent = "登録に失敗しました。もう一度お試しください。";
        }

    } finally {
        registerButton.disabled = false;
    }

});