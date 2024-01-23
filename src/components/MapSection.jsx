import map from '../../src/pictures/map.svg';
import './styles/MapSection.css';

const MapSection = () => {
    return (
    <div className='map-section'>
        <div className='text-container'>
        <h2>
            Huge Global Network of Fast VPN
        </h2>
        <p>
            See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.
        </p>
        </div>
        <img src={map} alt="map" />
     </div>
    )
}
export default MapSection;