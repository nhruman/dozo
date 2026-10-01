const language = "en";

async function loadLanguage() {
    const response = await fetch(`js/i18n/${language}.json`);
    const translations = await response.json();

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");

        if (translations[key]) {
            element.textContent = translations[key];
        }
    });
}

loadLanguage();