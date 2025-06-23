import Button from "../Widgets/Button";
import { links } from "../../constants/navItems";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center  p-4 sticky top-0 z-40 backdrop-blur border-b border-[#2e2e2e]">
        <div>
          <p className="font-bold text-2xl">
            Sandesh
            <span className="text-[#3A86FF] relative top-1">&bull;</span>
          </p>
        </div>

        <div>
          <ul className="flex gap-6 cursor-pointer">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[18px] hover:text-[#e1e1e1] duration-100 ease-in"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <a
            href="src/assets/files/SandeshRimalCV.pdf"
            download="Sandesh Rimal CV"
          >
            <Button
              buttonText="Download CV"
              buttonColor="#3A86FF"
              isIcon={true}
              icon={<Download />}
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
