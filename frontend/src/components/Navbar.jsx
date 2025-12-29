import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" text-2xl text-gray sticky top-0 z-50 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 ">
      <div className="max-w-6xl mx-auto  py-4 flex items-center justify-between ">
        
        {/* Logo */}
        <h1 className=" font-bold text-3xl tracking-wide  text-blue-800 drop-shadow-lg ">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-neutral-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-neutral-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-neutral-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-neutral-500 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-10 pb-4 space-y-3 ">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#project"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
