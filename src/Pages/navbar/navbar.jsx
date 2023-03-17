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
        link: '/login',
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
        menu: 'login1',
        link: '/login1',
    },
];

function Navmenu() {
    return (
        <nav>
            {navmenudata.map((d) => (
                <NavLink activeClassName="active" exact to={d.link}>
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
