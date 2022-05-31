import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    let activeStyle = {
        color: '#fff',
        background: '#1E88E5',
    }

    let notActiveStyle = {
        color: 'rgba(255, 255, 255, 0.7)',
        background: 'none',
    }


    return (
        <div className='header'>
            <div className="header__container">
                <ul className='header__list'>
                    <li className='header__item'>
                        <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle} to='/'>Все котики</NavLink>
                    </li>
                    <li className='header__item'>
                        <NavLink style={({isActive}) => isActive ? activeStyle : notActiveStyle}
                                 to='/favorites'>Любимые котики</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Header;