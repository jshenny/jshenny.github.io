import React, { useState } from "react";
import { NavLink } from "./NavbarElements";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full md:w-64 md:shrink-0 bg-white sticky top-0 md:h-screen z-10">
            {/* Mobile top bar */}
            <div className="flex items-center justify-between px-4 py-3 md:hidden">
                <span className="text-sm font-normal tracking-wide text-gray-700">Jane Shen</span>
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                    className="text-gray-700"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            <nav
                className={`
                    ${open ? "flex" : "hidden"} md:flex
                    flex-col items-end justify-center gap-4
                    px-[8%] py-4 text-right text-sm tracking-wide
                    md:h-full
                `}
                aria-label="Global"
            >
                <NavLink
                    to="/about"
                    onClick={() => setOpen(false)}
                    style={({ isActive }) => ({
                        color: isActive ? "#111827" : "#9CA38F",
                    })}
                >
                    about
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
        </header>
    );
};

export default Navbar;