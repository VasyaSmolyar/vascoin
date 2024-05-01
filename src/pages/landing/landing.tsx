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
      isHighlighted: true
    },
    {
      name: 'Tether',
      price: 1,
    },
    {
      name: 'Bitcoin',
      price: 49000,
    }
  ];

  const chipsData = [
    { text: "Crypto", isHighlighted: true },
    { text: "Defi" },
    { text: "BSC" },
    { text: "NFT" },
    { text: "Metaverse" },
    { text: "Polkadot" },
    { text: "Solana" },
    { text: "Opensea" },
    { text: "Makersplace" },
  ];

  return (
    <Page>
      <Hero />
      <Overview assets={dummyData} chips={chipsData} />
    </Page>
  );
}

export default Landing;
