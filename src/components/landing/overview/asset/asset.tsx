export type AssetProps = {
  name: string;
  price: number;
  isHighlighted?: boolean;
}
  
const Asset: React.FC<AssetProps> = ({ name, price, isHighlighted }) => {
  return (
    <div className={`w-[215px] h-[121px] relative bg-white rounded-[10px] ${isHighlighted ? 'shadow' : ''}`}>
      <div className="left-[14px] top-[16px] absolute justify-start items-center gap-12 inline-flex">
        <div className="justify-start items-center gap-4 flex">
          <div className="LogosBitcoin w-5 h-5 relative" />
          <div className="Bitcoin text-black text-xs font-bold font-['DM Sans']">{name}</div>
        </div>
        <div className="BtcUsd text-black text-xs font-normal font-['DM Sans']">BTC/USD</div>
      </div>
      <div className="Usd4616835 left-[14px] top-[48px] absolute text-black text-xl font-medium font-['DM Sans']">USD {price.toFixed(2)}</div>
      <div className="21523 left-[14px] top-[82px] absolute text-black text-xs font-normal font-['DM Sans']">35,215.23</div>
      <div className="px-2 py-0.5 left-[139px] top-[81px] absolute bg-red-500 rounded-[10px] justify-center items-center inline-flex">
        <div className="079 text-white text-xs font-normal font-['DM Sans']">-0.79%</div>
      </div>
    </div>
  );
};

export default Asset;
