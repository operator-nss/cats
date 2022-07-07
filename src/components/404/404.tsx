import React from 'react';
import {Link} from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import './404.css';

const NoMatch = () => {
    return (
        <div>
            <div className='error404'>
                <ErrorMessage />
                <p>Вы попали на страницу которой не существует</p>
                <Link to='/'><div className='back'>Back to MAIN page</div></Link>
            </div>
        </div>
    );
};

export default NoMatch;