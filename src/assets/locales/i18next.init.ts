import i18next from 'i18next';
import { translationEs } from '@locales/es';
import { translationEn } from '@locales/en';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nInstance = i18next.createInstance();

i18nInstance.use(LanguageDetector).init({
  interpolation: { escapeValue: false },
  resources: {
    es: {
      translation: translationEs,
    },
    en: {
      translation: translationEn,
    },
  },
});

export default i18nInstance;
