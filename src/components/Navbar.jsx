import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-md py-20 dark:bg-gray-800">
        <nav className="w-full mx-auto md:max-w-3xl sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div className="flex items-center justify-between">
                <a className="flex-none text-xl font-semibold text-gray-600 dark:text-white" href="/">Jane Shen</a>
            </div>
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                    <NavLink to="/about" 
                        style={({ isActive }) => ({ color: isActive ? 'black' : '#9CA38F' })}>
                        about
                    </NavLink>
                    <NavLink to="/projects" 
                        style={({ isActive }) => ({ color: isActive ? 'black' : '#9CA38F' })}>
                        projects
                    </NavLink>
                    <NavLink to="/art" 
                        style={({ isActive }) => ({ color: isActive ? 'black' : '#9CA38F' })}>
                        art
                    </NavLink>
            </div>
        </nav>
        </header>
    );
}

export default Navbar;