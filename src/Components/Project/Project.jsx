import { projects } from "../../constants/projectItems";
import Button from "../Widgets/Button";
import ProjectCard from "../Widgets/ProjectCard";

const Project = () => {
  return (
    <section className="px-[13%] mt-60" id="projects">
      <div className="flex justify-between">
        <h1 className="text-6xl font-bold">My Project</h1>
        <a href="https://github.com/sandesh101/" target="_blank">
          <Button buttonText="View All Projects" />
        </a>
      </div>
      <div className="grid grid-cols-2 mt-4 gap-5">
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
