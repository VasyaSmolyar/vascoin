import Hero from "components/landing/hero";
import Overview from "components/landing/overview";
import Page from "components/page";

const Landing: React.FC = () => {
  const dummyData = [
    {
      name: 'Bitcoin',
      price: 49000,
    },
    {
      name: 'Ethereum',
      price: 3200,
    },
    {
      name: 'Binance Coin',
      price: 400,
    },
  ];

  return (
    <Page>
      <Hero />
      <Overview assets={dummyData} />
    </Page>
  );
}

export default Landing;
