export type AssetProps = {
  name: string;
  price: number;
}
  
const Asset: React.FC<AssetProps> = ({ name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-xl">${price.toFixed(2)}</p>
    </div>
  );
};

export default Asset;
