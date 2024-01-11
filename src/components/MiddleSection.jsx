import '../components/MiddleSection.css';
import middlePic from '../features-illustration.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const MiddleSection = () => {
    return (
        <div className='middle-section'>
        <div className='middle-left-section'>
            <img src={middlePic} className= "middle-pic" alt="The guy with laptop" />
        </div>
        <div className='middle-right-section'>
            <h3 className='middle-section-description'>We provide many features you can use</h3>
                <p className='middle-section-des-lower'>You can explote the features that we provide with fun and have their own functions each feature</p>
                <div className='custom-checkbox'>
                <FontAwesomeIcon icon={faCheck} className='checked-font'/>
                <p>Powerful online protection</p>
                </div>
                <div className='custom-checkbox'>
                <FontAwesomeIcon icon={faCheck} className='checked-font'/>
                <p>Internet without borders</p>
                </div>
                <div className='custom-checkbox'>
                <FontAwesomeIcon icon={faCheck} className='checked-font'/>
                <p>Supercharged VPN</p>
                </div>
                <div className='custom-checkbox'>
                <FontAwesomeIcon icon={faCheck} className='checked-font'/>
                <p>No specific time limits</p>
                </div>
        </div>
        </div>
    )
}
export default MiddleSection;