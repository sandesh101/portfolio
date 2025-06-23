import { useState } from "react";
import Button from "../Widgets/Button";
import { links } from "../../constants/navItems";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 backdrop-blur border-b border-[#2e2e2e]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div>
          <a href="/">
            <p className="font-bold text-2xl">
              Sandesh
              <span className="text-[#3A86FF] relative top-1">&bull;</span>
            </p>
          </a>
        </div>

        <ul className="hidden md:flex gap-6">
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

        <div className="hidden sm:block">
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

        <div className="md:hidden">
          <Menu
            size={28}
            className="cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-[#0A0A0A] z-50 px-6 py-4 transform transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "right-0 opacity-100"
            : "hidden right-[-100%] opacity-0 pointer-events-none display-none"
        }`}
      >
        <div className="flex justify-end">
          <X
            size={24}
            className="cursor-pointer mb-4"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-[18px] block hover:text-[#e1e1e1] duration-100 ease-in"
                onClick={() => setMenuOpen(false)} // close on click
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="src/assets/files/SandeshRimalCV.pdf"
              download="Sandesh Rimal CV"
            >
              <Button
                buttonText="Download CV"
                buttonColor="#3A86FF"
                isIcon={true}
                icon={<Download />}
                className="w-full"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
