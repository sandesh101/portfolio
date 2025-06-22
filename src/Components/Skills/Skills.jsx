import TechCard from "../Widgets/TechCard";
import { skills } from "../../constants/skillCardItems";

const Skills = () => {
  return (
    <section className="flex flex-col px-[13%] mt-10" id="skills">
      <h1 className="text-6xl font-bold">Current Technologies</h1>
      <p className="text-[#A0A0AA] mt-4">
        My workflow is powered by a carefully chosen set of tools that help me
        ship efficient, maintainable, and elegant apps. Here's a snapshot of my
        core tech stack.
      </p>
      <div className="grid grid-cols-4 gap-x-10 gap-y-5 mt-15">
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
