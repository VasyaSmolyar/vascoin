import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "heroTitle": "Learn, Buy & Sell Crypto Easily",
      "heroSubtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
      "heroButton": "Get Started Now",
      "heroSponsorText": "Our Sponsors"
    }
  },
  ru: {
    translation: {
      "heroTitle": "Легко узнать, купить и продать криптовалюту",
      "heroSubtitle": "Lorem Ipsum - это просто текст-рыба типографских и наборных изданий. Lorem Ipsum был стандартом в отрасли",
      "heroButton": "Начать сейчас",
      "heroSponsorText": "Наши спонсоры"
    }
  }
};

i18n
 .use(initReactI18next)
 .init({
    resources,
    lng: 'en',
    fallbackLng: 'en'
  });

export default i18n;
