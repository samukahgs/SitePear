function googleTranslateElementInit() {

new google.translate.TranslateElement({
pageLanguage: 'pt',
includedLanguages: 'en,pt',
autoDisplay: false
}, 'google_translate_element');

}

function traduzir(lang) {

const combo = document.querySelector(".goog-te-combo");

if (!combo) {
setTimeout(() => traduzir(lang), 500);
return;
}

combo.value = lang;
combo.dispatchEvent(new Event("change"));

}