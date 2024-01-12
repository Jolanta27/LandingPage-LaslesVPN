import '../components/MiddleSection.css';
import middlePic from '../features-illustration.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const features = [
    'Powerful online protection',
    'Internet without borders',
    'Supercharged VPN'
];

const MiddleSection = () => {
    return (
        <div className='middle-section'>
        <div>
            <img src={middlePic} className= "middle-pic" alt="The guy with laptop" />
        </div>
        <div>
            <h3>
                We provide many features you can use
            </h3>
            <p>
                You can explore the features that we provide with fun and have their own functions each feature
            </p>
            {features.map((features, index) => (
            <div className='custom-checkbox' key={index}>
            <FontAwesomeIcon icon={faCheck} className='checked-font'/>
            <p>{features}</p>
            </div>
            ))}
        </div>
        </div>
    )
}
export default MiddleSection;