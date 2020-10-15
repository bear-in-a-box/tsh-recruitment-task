import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export function initI18n() {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
  });
}
