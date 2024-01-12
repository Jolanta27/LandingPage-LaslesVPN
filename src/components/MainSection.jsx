import React from 'react';
import './styles/MainSection.css';
import picture from '../../src/pictures/header-illustration.svg';

const MainSection = () => {
    return (
        <div className='main-section'>
        <div className='left-section'>
        <h1>
            Want anything to be easy with <span className='brand-name'>LaslesVPN.</span>
        </h1>
        <p>
            Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
        </p>
        <div className='centered-button'>
        <button>Get Started</button>
        </div>
    </div>
    <div className='image-section'>
    <img src={picture} className='main-picture' alt="The guy working" />
    </div>
    </div>
    );
};
export default MainSection;