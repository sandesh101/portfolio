import TechCard from "../Widgets/TechCard";
import { skills } from "../../constants/skillCardItems";

const Skills = () => {
  return (
    <section
      className="flex flex-col px-4 sm:px-10 lg:px-[13%] mt-10"
      id="skills"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Current Technologies
      </h1>

      <p className="text-[#A0A0AA] mt-4 text-sm sm:text-base md:text-lg max-w-3xl">
        My workflow is powered by a carefully chosen set of tools that help me
        ship efficient, maintainable, and elegant apps. Here's a snapshot of my
        core tech stack.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 mt-10">
        {skills.map((skill) => (
          <TechCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
