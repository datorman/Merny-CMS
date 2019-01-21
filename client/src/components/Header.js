import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from './../actions/auth';
import Menu from './menu';

export const Header= ({startLogout}) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <div className="header_logo">
                    <Link className="header__title" to="/">
                        <h1>Project</h1>
                    </Link>
                </div>
                <div className="header_menu">
                    <Menu/>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) =>({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);