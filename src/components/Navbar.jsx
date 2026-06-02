import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      w-full
      bg-black/50
      backdrop-blur-lg
      z-50"
    >

      <div
        className="
        flex
        justify-between
        items-center
        px-6
        py-5"
      >

        {/* Logo */}
        <h1
          className="
          text-cyan-400
          text-2xl
          font-bold"
        >
          MM
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Desktop Menu */}
          <div
            className="
            hidden
            md:flex
            gap-8"
          >
            <a href="#skills" className="hover:text-cyan-400 duration-300">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 duration-300">
              Projects
            </a>

            <a href="#certificates" className="hover:text-cyan-400 duration-300">
              Certificates
            </a>

            <a href="#contact" className="hover:text-cyan-400 duration-300">
              Contact
            </a>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          flex
          flex-col
          gap-4
          px-6
          pb-5
          bg-slate-950"
        >
          <a href="#skills" onClick={() => setOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setOpen(false)}>
            Projects
          </a>

          <a href="#certificates" onClick={() => setOpen(false)}>
            Certificates
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </div>
      )}

    </nav>
  );
}

