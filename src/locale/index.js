import ru from './ru.json';

const LOCALE_STORAGE_LANG_KEY = 'fast-chat/lang';
let lang = localStorage.getItem(LOCALE_STORAGE_LANG_KEY);

export function t(key) {
  let locale;

  if (!lang) {
    return key;
  }

  if (lang === 'ru') {
    locale = ru;
  }

  return locale[key] || key;
}

export function setLang(value) {
  if (!value) {
    localStorage.removeItem(LOCALE_STORAGE_LANG_KEY);
  } else {
    localStorage.setItem(LOCALE_STORAGE_LANG_KEY, value);
  }

  lang = value;
}
