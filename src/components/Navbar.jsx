import React, { useState } from "react";
import { NavLink } from "./NavbarElements";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white z-10">
      <div className="flex items-center justify-between max-w-2xl mx-auto px-6 pt-20 pb-6">
        {/* Site name */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-wide text-gray-900"
        >
          Jane Shen
        </NavLink>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="text-gray-700 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Nav links */}
        <nav
          className={`
            ${open ? "flex" : "hidden"} md:flex
            absolute md:static top-full left-0 w-full md:w-auto
            flex-col md:flex-row items-end md:items-center
            gap-4 md:gap-6
            bg-white md:bg-transparent
            px-6 md:px-0 py-4 md:py-0
            text-right text-sm tracking-wide
          `}
          aria-label="Global"
        >
          <NavLink
            to="/research"
            onClick={() => setOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? "#111827" : "#9CA38F",
            })}
          >
            research
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? "#111827" : "#9CA38F",
            })}
          >
            projects
          </NavLink>

          <NavLink
            to="/art"
            onClick={() => setOpen(false)}
            style={({ isActive }) => ({
              color: isActive ? "#111827" : "#9CA38F",
            })}
          >
            art
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;