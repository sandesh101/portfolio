const TechCard = ({ name, icon, description }) => {
  return (
    <div
      key={name}
      className="bg-[#333333] p-3 flex rounded-md gap-5 items-center border border-transparent hover:border-[#E0E0E0] hover:bg-[#2e2e2e] transition-all cursor-pointer"
    >
      <img src={icon} alt={name} className="h-[55px] w-[55px]" />
      <div>
        <p>{name}</p>
        <p className="text-[#A0A0AA]">{description}</p>
      </div>
    </div>
  );
};

export default TechCard;
