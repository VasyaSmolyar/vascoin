import Asset, { AssetProps } from "./asset";
import Chip, { ChipProps } from "./chip";

interface OverviewProps {
  assets: AssetProps[];
  chips: ChipProps[];
}


const Overview: React.FC<OverviewProps> = ({ assets, chips }) => {
  return (
    <div className="w-[1032px] h-[219px] px-[38px] py-[25px] bg-white rounded-[10px] shadow flex-col justify-start items-start gap-6 inline-flex">
      <div className="justify-start items-center gap-8 inline-flex">
        <div className="justify-start items-center gap-8 flex">
          {chips.map((chip) => (
            <Chip text={chip.text} isHighlighted={chip.isHighlighted} />
          ))}
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
