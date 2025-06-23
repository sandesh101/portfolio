import { projects } from "../../constants/projectItems";
import Button from "../Widgets/Button";
import ProjectCard from "../Widgets/ProjectCard";

const Project = () => {
  return (
    <section
      className="px-4 sm:px-8 lg:px-[13%] mt-20 sm:mt-40 lg:mt-60"
      id="projects"
    >
      {/* Heading + Button */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
          My Projects
        </h1>
        <a href="https://github.com/sandesh101/" target="_blank">
          <Button buttonText="View All Projects" />
        </a>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            name={project.title}
            tech={project.techUsed}
            image={project.image}
            url={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
