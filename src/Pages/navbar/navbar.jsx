import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

// array of data
const navmenudata = [
    {
        menu: 'Locker',
        link: '/locker',
    },
    {
        menu: 'login',
        link: '/login1',
    },
    {
        menu: 'button',
        link: '/button',
    },
    {
        menu: 'dummytable',
        link: '/dummytable',
    },
    {
        menu: 'Admin',
        link: '/admin',
    },
    {
        menu: 'login1',
        link: '/login',
    },
];

function Navmenu() {
    return (
        <nav>
            {navmenudata.map((d) => (
                <NavLink
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    to={d.link}
                    key={Math.random()}
                >
                    {d.menu}
                </NavLink>
            ))}
        </nav>
    );
}

function navbar() {
    return (
        <div className="navigation">
            <Navmenu />
        </div>
    );
}

export default navbar;
