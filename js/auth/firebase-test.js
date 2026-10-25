import { auth } from "./firebase-config.js";

console.log("Firebase Authentication initialized!");
console.log("Firebase Project:", auth.app.options.projectId);