export type ChipProps = {
  text: string;
  isHighlighted?: boolean;
}

const Chip: React.FC<ChipProps> = ({ text, isHighlighted }) => {
  const chip = (
    <div className={"text-black text-xs font-normal font-['DM Sans']"}>{text}</div>
  );

  if(!isHighlighted) {
    return chip;
  }

  return (
    <div className="justify-start items-center gap-8 inline-flex">
      <div className="w-20 h-6 relative">
        <div className="w-20 h-3.5 left-0 top-[5px] absolute bg-red-500 bg-opacity-50 blur-[25px]" />
        <div className="w-20 h-6 pl-[21px] pr-5 py-1 left-0 top-0 absolute rounded-[15px] border border-red-500 justify-center items-center inline-flex">
          {chip}
        </div>
      </div>
    </div>
  );
};

export default Chip;
