import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { en, hy, ru } from './index.ts';

const STORE_LANGUAGE_KEY = 'settings.lang';

const languageDetectorPlugin = {
   type: 'languageDetector',
   async: true,
   init: () => {},
   detect: async function (callback: (lang: string) => void) {
      try {
         await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) => {
            return language ? callback(language) : callback('en');
         });
      } catch (error) {
         console.log('Error reading language', error);
      }
   },
   cacheUserLanguage: async function (language: string) {
      try {
         await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
      } catch (error) {}
   },
};

const resources = {
   en: {
      translation: en,
   },
   hy: {
      translation: hy,
   },
   ru: {
      translation: ru,
   },
};

i18n
   .use(initReactI18next)
   // @ts-ignore
   .use(languageDetectorPlugin)
   .init({
      resources,
      compatibilityJSON: 'v3',
      fallbackLng: 'en',
      interpolation: {
         escapeValue: false,
      },
   });

export default i18n;
