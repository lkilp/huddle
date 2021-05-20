import React from 'react';
import './Header.scss'
import Navigation from './Navigation';

const Header = () => {
    return(
        <div className="Header">
            <div className="filter">
                <div className="background-pattern">
                    <Navigation />
                    <div className="content">
                        <div className="left">
                            <h1>Build The Community<br></br> Your Fans Will Love</h1>
                            <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion. 
</p>
                            <div>
                                <button className="get-started-button">Get Started For Free</button>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;
