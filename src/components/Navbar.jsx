import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav h-[100px] w-full flex justify-between items-center bg-[#74C69D]" aria-label="Main navigation">

            <img className="nav-logo h-[40px] pl-[100px]" src={logo} alt="Website Logo" />

            {/* Navigation Links */}
            <ul className="nav-list pr-[100px] hidden md:flex gap-5 text-white">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
                        Portfolio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? 'text-black' : 'text-white'}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
