import React from 'react';
import './Header.css';
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetCats} from "../../store/cats/catsSlice";

const Header = () => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();
    
    
    let activeStyle = {
        color: '#fff',
        background: '#1E88E5',
    }

    let notActiveStyle = {
        color: 'rgba(255, 255, 255, 0.7)',
        background: 'none',
    }

    const resetCat = () => {
        if(pathname === '/favorites') {
            dispatch(resetCats())
        }
     }

    return (
        <div className='header'>
            <div className="header__container">
                <ul className='header__list'>
                    <li className='header__item'>
                        <NavLink onClick={resetCat} style={({isActive}) => isActive ? activeStyle : notActiveStyle} to='/'>Все котики</NavLink>
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