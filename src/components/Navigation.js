import React from 'react';
import './Navigation.scss';
import logo from '../assets/images/logo.svg';

const Navigation = () => {
    return(
        <div className="Navigation">
            <img src={logo} alt="logo" />
            <button className="try-it-button">Try It Free</button>
        </div>
    )
}
export default Navigation;