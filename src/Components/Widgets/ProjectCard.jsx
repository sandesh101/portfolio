const ProjectCard = ({ name, tech, image, url }) => {
  return (
    <a href={url} target="_blank">
      <div className="p-4 bg-[#333333] rounded-md">
        <img src={image} alt={name} className="rounded-md w-[100%]" />
        <p className="text-3xl mt-4">{name}</p>
        <div className="flex gap-3 mt-4">
          {tech.map((tech) => (
            <p className="p-3 bg-[#424242] rounded-md cursor-pointer border border-transparent hover:bg-[#626262] hover:border-[#E0E0E0] transition-all">
              {tech}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
