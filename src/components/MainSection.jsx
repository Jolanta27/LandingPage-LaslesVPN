import React from 'react';
import './styles/MainSection.css';
import picture from '../../src/pictures/header-illustration.svg';
import SignUp from './SignUp';
import { useState } from 'react';
import './styles/SignUp.css';


const MainSection = () => {
    const [showForm, setShowForm] = useState(false);

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
        <button className='started-btn' onClick={() => setShowForm(true)}>Get Started</button>
        </div>
    </div>
    <div className='parent-img'>
    <img src={picture} alt="The guy working" />
    </div>
    {showForm && <SignUp />}
    </div>
    );
};
export default MainSection;