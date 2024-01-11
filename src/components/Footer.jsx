import './Footer.css';
import logo from '../Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from  '@fortawesome/free-brands-svg-icons';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from  '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
        <div className="footer-main-section">
            <div className='subscription-main'>
                <div className='subscription-text'>
                    <h4>Subscribe Now for Get Special Features!</h4>
                    <p>Let's subscribe with us and find the fun.</p>
                </div>
                <div className='subscription-button'>
                    <button type="button">Subscribe Now</button>
                </div>
            </div>
        </div>
        <div className='footer-main-section'>
            <div className='footer-logos'>
                <img src={logo} alt="logo" />
                <p>LaslesVPN is a private virtual network that has unique features and has high security.</p>
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <p>©{currentYear}Lasles<span>VPN</span></p>
            </div>
            <div className='footer-links-section'>
            <div className='footer-links-main'>
                <h4>Product</h4>
                <ul>
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Locations</li>
                    <li>Server</li>
                    <li>Countries</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <h4>Engage</h4>
                <ul>
                    <li>LaslesVPN?</li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            <div>
                <h4>Earn Money</h4>
                <li>Affiliate</li>
                <li>Become Partner</li>
            </div>
        </div>
        </div>
        </footer>
    )
}
export default Footer;