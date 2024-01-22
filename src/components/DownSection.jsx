import './styles/DownSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faServer, faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Statistic = ({ icon, number, label}) => {
    return (
        <div className='statistic'>
            <FontAwesomeIcon icon={icon} className='font-picture'/>
            <div className='uls-section'>
                <h2>{number}</h2>
                <p>{label}</p>
            </div>
        </div> 
    );
}
 const VerticalLine = () => {
    return (
    <div className='vertical-line'></div>
    );
 };

const DownSection = () => {
return (
    <div className="down-section-main">
        <div className='section'>
        <Statistic icon={faUser} number="90+" label="Users"/>
        <VerticalLine />
        <Statistic icon={faLocationPin} number="30+" label="Locations"/>
        <VerticalLine /> 
        <Statistic icon={faServer} number="50+" label="Servers"/>
        </div>
    </div>
);
}
export default DownSection;