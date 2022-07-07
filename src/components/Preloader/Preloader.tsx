import React from 'react';
import spinner from './spinner.svg';
import './preloader.css';

const Preloader = () => {
    return (
        <div className='spinner'><img src={spinner} alt=""/></div>
    );
};

export default Preloader;