import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslations from './translations/en.json';

export function initI18n() {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: { translation: englishTranslations },
    },
  });
}
