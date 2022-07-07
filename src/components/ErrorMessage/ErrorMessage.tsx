import React from 'react';
import error from './404.jpg';
import './404.scss';

const ErrorMessage = () => {
    return (
        <div>
            <div className='error'><img src={error} alt=""/></div>
        </div>
    );
};

export default ErrorMessage;