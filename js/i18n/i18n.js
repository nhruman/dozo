// Current Language
let currentLanguage = localStorage.getItem("siteLanguage") || "en";

// Load Translation
async function loadLanguage(language = currentLanguage) {

    try {

        const response = await fetch(`js/i18n/${language}.json`);

        if (!response.ok) {
            throw new Error(`Language file not found: ${language}`);
        }

        const translations = await response.json();

        document.querySelectorAll("[data-i18n]").forEach(element => {

            const key = element.getAttribute("data-i18n");

            // Translation থাকলেই Text পরিবর্তন করবে
            if (Object.prototype.hasOwnProperty.call(translations, key)) {

                element.textContent = translations[key];

            } else {

                console.warn("Translation Missing:", key);

            }

        });

        document.documentElement.lang = language;

        console.log("Language Loaded:", language);

    } catch (error) {

        console.error("Language Error:", error);

    }

}


// Change Language
window.changeLanguage = function (language) {

    currentLanguage = language;

    localStorage.setItem("siteLanguage", language);

    loadLanguage(language);

};


// Apply Saved Language
window.applyLanguage = function () {

    loadLanguage(currentLanguage);

};


// Initial Load
document.addEventListener("DOMContentLoaded", () => {

    loadLanguage(currentLanguage);

});