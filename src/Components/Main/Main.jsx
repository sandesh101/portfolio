import Button from "../Widgets/Button";
import { MoveRight } from "lucide-react";

const Main = () => {
  return (
    <div className="bg-grid">
      <main
        className="min-h-screen w-full flex flex-col items-center justify-center px-4 text-center"
        id="main"
      >
        <p className="uppercase mb-3 font-semibold text-sm sm:text-base">
          Based in Nepal
        </p>

        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Hi, I'm Sandesh
          <span className="text-[#3A86FF] relative top-2">&bull;</span>
        </p>

        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A0A0AA] mt-2">
          Mobile App Developer
        </p>

        <p className="text-base sm:text-lg md:text-xl text-[#A0A0AA] mt-6 max-w-2xl">
          I craft beautiful, high-performance mobile applications using Flutter
          and modern development practices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8">
          <a href="#project">
            <Button
              buttonText="View My Work"
              buttonColor="#3A86FF"
              isIcon={true}
              icon={
                <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
              }
            />
          </a>
          <a href="#contact">
            <Button
              buttonText="Contact Me"
              buttonColor="#0A0A0A"
              isSecondary={true}
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Main;
