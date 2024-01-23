import React from 'react';
import './styles/MainSection.css';
import picture from '../../src/pictures/header-illustration.svg';

const MainSection = () => {
    return (
        <div id="about" className='main-section'>
        <div>
        <h1 className='main-section-main'>
            Want anything to be easy with <span>LaslesVPN.</span>
        </h1>
        <p>
            Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
        </p>
        <div>
        <button className='started-btn'>Get Started</button>
        </div>
    </div>
    <div className='parent-img'>
    <img src={picture} alt="The guy working" />
    </div>
    </div>
    );
};
export default MainSection;