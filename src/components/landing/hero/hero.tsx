import heroImage from 'assets/landing/hero.png';
import sponsorOne from 'assets/landing/sponsor1.png';
import sponsorTwo from 'assets/landing/sponsor2.png';
import sponsorThree from 'assets/landing/sponsor3.png';


const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-cover bg-center">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">Learn, Buy & Sell Crypto Easily</h1>
        <p className="text-xl mb-8">Learn, Buy & Sell Crypto Easily</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Get Started Now</button>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-8">Our Sponsors</h3>
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
