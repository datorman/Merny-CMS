import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => (
    <ul className="menu">
        <MenuItem 
            to="/"
            title="Home"
        />
        <MenuItem 
            to="/blog"
            title="Blog"
        />
    </ul>
);

export default Menu;
