import Button from "../Widgets/Button";
import { MoveRight } from "lucide-react";

const Main = () => {
  return (
    <div className="bg-grid">
      <main
        className="h-screen w-full flex items-center flex-col relative top-50"
        id="main"
      >
        <p className="uppercase mb-3 font-semibold">Based in Nepal</p>
        <p className="text-7xl font-bold">
          Hi, I'm Sandesh
          <span className="text-[#3A86FF] relative top-[15px]">&bull;</span>
        </p>
        <p className="text-7xl font-bold text-[#A0A0AA]">
          Mobile App Developer
        </p>
        <p className="text-2xl text-[#A0A0AA] text-center mt-6 w-2xl">
          I craft beautiful, high-performance mobile applications using Flutter
          and modern development practices.
        </p>
        <div className="flex gap-5 mt-6">
          <Button
            buttonText="View My Work"
            buttonColor="#3A86FF"
            isIcon={true}
            icon={
              <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
            }
          />
          <Button
            buttonText="Contact Me"
            buttonColor="#0A0A0A"
            isSecondary={true}
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
