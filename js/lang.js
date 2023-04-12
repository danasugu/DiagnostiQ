// Define language translations
const translations = {
  en: {
    home: "Home",
    description: "This is an example of an i18n-enabled website.",
    test: "This is a test.",
  },
  ro: {
    home: "Acasa",
    description: "Acesta este un exemplu de site web cu suport i18n.",
    test: "Acesta este un test.",
  },
};


// Create a function to update the text content of the HTML elements based on the selected language.

function updateLanguage(lang) {
  document.getElementById("title").textContent = translations[lang].title;
  document.getElementById("description").textContent = translations[lang].description;
  document.getElementById("test").textContent = translations[lang].test;
}