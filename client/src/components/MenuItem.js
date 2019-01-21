import React from 'react';
import {Link} from 'react-router-dom';

const MenuItem = (props) => (
    <li className="menu__item">
        <Link className="menu__item-link" to={props.to}>{props.title}</Link>
    </li>
);

export default MenuItem;