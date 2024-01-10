import map from '../map.svg';
import '../components/MapSection.css';

const MapSection = () => {
    return (
        <div className='map-section-main'>
        <h2 className='map-description'>Huge Global Network of Fast VPN</h2>
        <p>See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
        <div className='map-section-pic'>
        <img src={map} className="map" alt="map" />
        </div>
        </div>
    )
}
export default MapSection;