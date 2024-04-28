import heroImage from 'assets/landing/hero.png';
import sponsorOne from 'assets/landing/sponsor1.png';
import sponsorTwo from 'assets/landing/sponsor2.png';
import sponsorThree from 'assets/landing/sponsor3.png';
import { useTranslation } from 'react-i18next';


const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between bg-cover bg-center pt-32">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">{t('heroTitle')}</h1>
        <p className="text-xl mb-8">{t('heroSubtitle')}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">{t('heroButton')}</button>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-8">{t('heroSponsorText')}</h3>
          <div className="flex items-center justify-between">
            <img className="h-16" src={sponsorOne} alt="Sponsor 1" />
            <img className="h-16" src={sponsorTwo} alt="Sponsor 2" />
            <img className="h-16" src={sponsorThree} alt="Sponsor 3" />
          </div>
        </div>
      </div>
      <img className="w-1/2" src={heroImage} alt="Hero" />
    </div>
  );
}

export default Hero;
