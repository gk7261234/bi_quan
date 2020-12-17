import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cen from "./en";
import czh from "./zh";
const lng = "en";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: { ...cen },
      },
      zh: {
        translation: { ...czh },
      },
    },
    lng,
    fallbackLng: lng,

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
