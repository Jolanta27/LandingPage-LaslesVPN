import './DownSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faServer, faLocationPin } from '@fortawesome/free-solid-svg-icons';


const DownSection = () => {
return (
    <div className="user-location-server-section">
        <div className='section'>
        <div className='user-section'>
        <FontAwesomeIcon icon={faUser} />
        <div className='uls-section'>
        <h2>90+</h2>
        <p>Users</p>
        </div>
        </div>
        <div className='vertical-line'></div>
        <div className='location-section'>
        <FontAwesomeIcon icon={faLocationPin} />
        <div className='uls-section'>
        <h2>30+</h2>
        <p>Locations</p>
        </div>
        </div>
        <div className='vertical-line'></div>
        <div className='server-section'>
        <FontAwesomeIcon icon={faServer} />
        <div className='uls-section'>
        <h2>50+</h2>
        <p>Servers</p>
        </div>
        </div>
    </div>
    </div>
)
}
export default DownSection;