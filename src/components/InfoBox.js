import React from 'react';
import './InfoBox.scss'

const InfoBox = (props) => {
    const { title, story, name } = props;
    return(
        <div className="InfoBox">
            <div className="left">
                <h3>{title}</h3>
                <p>{story}</p>
            </div>
            <div className={`right ${name}`}></div>
        </div>
    )
}
export default InfoBox;