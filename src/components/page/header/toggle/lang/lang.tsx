import { useTranslation } from 'react-i18next';

const LangToggle = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('en')}>EN</button>
      <button onClick={() => handleLanguageChange('ru')}>RU</button>
    </div>
  );
};

export default LangToggle;
