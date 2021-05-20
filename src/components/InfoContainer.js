import React from 'react';
import InfoBox from './InfoBox';
import './InfoContainer.scss';
import Island from './Island';

const InfoContainer = () => {
    return(
        <div className="InfoContainer">
            <InfoBox title="Grow Together"
                     story="Generate meaningful discussions with your audience and build a strong, loyal community. 
                     Think of the insightful conversations you miss out on with a feedback form."
                     name="grow-together"
            />
            <InfoBox title="Flowing Conversations"
                     story="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                     have just-in-time loading for a more natural flow."
                     name="flowing-conversations"
            />
            <InfoBox title="Your Users"
                     story="It takes no time at all to integrate Huddle with your app's authentication solution. 
                     This means, once signed in to your app, your users can start chatting immediately."
                     name="your-users"
            />
            <div className="island-container">
                <Island />   
            </div>     
        </div>
    )
}
export default InfoContainer;