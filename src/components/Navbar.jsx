import React from "react";
import { NavLink } from "./NavbarElements";

const Navbar = () => {
    return (
        <header className="fixed left-0 top-0 h-screen w-1/5 bg-white">
            <nav
                className="flex h-full flex-col items-end justify-center px-[8%] text-right"
                aria-label="Global"
            >
                {/* Name */}
                {/* <a
                    className="mb-14 text-sm font-normal tracking-wide text-gray-700"
                    href="/"
                >
                    Jane Shen
                    <img src={require("../assets/images/profilePic.png")} alt="Profile Picture" className="w-25 h-25ml-2 inline-block" />
                </a> */}

                {/* Navigation */}
                <div className="flex flex-col gap-4 text-sm tracking-wide">
                    <NavLink
                        to="/about"
                        style={({ isActive }) => ({
                            color: isActive ? "#111827" : "#9CA38F",
                        })}
                    >
                        about
                    </NavLink>

                    <NavLink
                        to="/projects"
                        style={({ isActive }) => ({
                            color: isActive ? "#111827" : "#9CA38F",
                        })}
                    >
                        projects
                    </NavLink>

                    <NavLink
                        to="/art"
                        style={({ isActive }) => ({
                            color: isActive ? "#111827" : "#9CA38F",
                        })}
                    >
                        art
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;