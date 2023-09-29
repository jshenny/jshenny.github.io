import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <nav className="flex md:w-1/6 p-3 md:flex-col gap-2 text-right">
            <div>
                <NavLink to="/home" activeStyle>
                    home
                </NavLink>
                <NavLink to="/about" activeStyle>
                    about
                </NavLink>
                <NavLink to="/projects" activeStyle>
                    projects
                </NavLink>
                <NavLink to="/resume" activeStyle>
                    resume
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;