import Asset, { AssetProps } from "./asset";

interface OverviewProps {
  assets: AssetProps[];
}

const Overview: React.FC<OverviewProps> = ({ assets }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 m-2">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crypto
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Defi
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            BSC
          </button>
        </div>
      </div>
      <div className="flex space-x-4">
        {assets.map((asset, index) => (
          <Asset key={index} name={asset.name} price={asset.price} />
        ))}
      </div>
    </div>
  );
};

export default Overview;
