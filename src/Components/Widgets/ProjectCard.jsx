const ProjectCard = ({ name, tech, image, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="p-4 bg-[#333333] rounded-md">
        <img src={image} alt={name} className="rounded-md w-full" />

        <p className="text-2xl sm:text-3xl mt-4">{name}</p>

        <div className="flex flex-wrap gap-3 mt-4">
          {tech.map((item, index) => (
            <p
              key={index}
              className="p-2 bg-[#424242] rounded-md cursor-pointer border border-transparent hover:bg-[#626262] hover:border-[#E0E0E0] transition-all break-words text-sm sm:text-base"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
