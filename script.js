const languageButtons = document.querySelectorAll('[data-language]');
const localizedElements = document.querySelectorAll('[data-en][data-fi]');

function setLanguage(language) {
  const selected = language === 'fi' ? 'fi' : 'en';
  document.documentElement.lang = selected;
  document.title = selected === 'fi' ? 'Bussi – Tuki ja tietosuoja' : 'Bussi – Support & Privacy';
  localizedElements.forEach((element) => {
    element.textContent = element.dataset[selected];
  });
  languageButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.language === selected);
  });
  localStorage.setItem('bussi-language', selected);
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

const savedLanguage = localStorage.getItem('bussi-language');
const browserLanguage = navigator.language.toLowerCase().startsWith('fi') ? 'fi' : 'en';
setLanguage(savedLanguage || browserLanguage);
