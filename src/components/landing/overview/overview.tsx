import Asset, { AssetProps } from "./asset";

interface OverviewProps {
  assets: AssetProps[];
}

const Overview: React.FC<OverviewProps> = ({ assets }) => {
  return (
    <div className="w-[1032px] h-[219px] px-[38px] py-[25px] bg-white rounded-[10px] shadow flex-col justify-start items-start gap-6 inline-flex">
      <div className="justify-start items-center gap-8 inline-flex">
        <div className="w-20 h-6 relative">
          <div className="w-20 h-3.5 left-0 top-[5px] absolute bg-red-500 bg-opacity-50 blur-[25px]" />
          <div className="w-20 h-6 pl-[21px] pr-5 py-1 left-0 top-0 absolute rounded-[15px] border border-red-500 justify-center items-center inline-flex">
            <div className="Crypto text-black text-xs font-normal font-['DM Sans']">Crypto</div>
          </div>
        </div>
        <div className="justify-start items-center gap-8 flex">
          <div className="Defi text-black text-xs font-normal font-['DM Sans']">Defi</div>
          <div className="Bsc text-black text-xs font-normal font-['DM Sans']">BSC</div>
          <div className="Nft text-black text-xs font-normal font-['DM Sans']">NFT</div>
          <div className="Metaverse text-black text-xs font-normal font-['DM Sans']">Metaverse</div>
          <div className="Polkadot text-black text-xs font-normal font-['DM Sans']">Polkadot</div>
          <div className="Solana text-black text-xs font-normal font-['DM Sans']">Solana</div>
          <div className="Opensea text-black text-xs font-normal font-['DM Sans']">Opensea</div>
          <div className="Makersplace text-black text-xs font-normal font-['DM Sans']">Makersplace</div>
        </div>
      </div>
      <div className="justify-start items-start gap-8 inline-flex">
        {assets.map((asset) => (
          <Asset name={asset.name} price={asset.price} isHighlighted={asset.isHighlighted} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
