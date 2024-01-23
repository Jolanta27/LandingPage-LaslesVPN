import './styles/Footer.css';
import logo from '../../src/pictures/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from  '@fortawesome/free-brands-svg-icons';
import { faTwitter } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from  '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const LeftFooterLinks = [
        {'title': 'Download', url: '/download'},
        {'title': 'Pricing', url: '/pricing'},
        {'title': 'Locations', url: '/locations'},
        {'title': 'Servers', url: '/servers'},
        {'title': 'Countries', url: '/countries'},
        {'title': 'Blog', url: '/blog'}
    ];
    const MiddleFooterLinks = [
        {'title': 'LaslesVPN?', url: '/laslesvpn?'},
        {'title': 'FAQ', url: 'faq'},
        {'title': 'Tutorials', url: 'tutorials'},
        {'title': 'About Us', url: 'aboutus'},
        {'title': 'Privacy Policy', url: 'pricacy'},
        {'title': 'Terms of Service', url: 'termsofservice'}
    ]
    const RightFooterLinkes = [
        {'title': 'Affiliate', url: '/affiliate'},
        {'title': 'Become Parter', url: '/becomepartner'}
    ]
    return (
        <footer id="footer">
            <div className="footer-boxes">
                <div className='subscription'>
                    <div className='subscription-text'>
                        <h4>
                            Subscribe Now for Get Special Features!
                        </h4>
                        <p>
                            Let's subscribe with us and find the fun.
                        </p>
                    </div>
                    <div>
                        <button>
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
            <div className='footer-content'>
            <div className='footer-boxes'>
                <div>
                <img src={logo} alt="logo" />
                <p>
                    LaslesVPN is a private virtual network that has unique features and has high security.
                </p>
                <FontAwesomeIcon icon={faFacebookF} className='brand-font'/>
                <FontAwesomeIcon icon={faTwitter} className='brand-font'/>
                <FontAwesomeIcon icon={faInstagram} className='brand-font'/>
              </div>
            <div className='footer-links'>
            <div className='links-1 left-links'>
                <h4>
                    Product
                </h4>
                <ul className='custom-list'>
                 {LeftFooterLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.title}</a>
                    </li>
                 ))}
                </ul>
            </div>
            <div className='links-1 middle-links'>
                <h4>
                    Engage
                </h4>
                <ul className='custom-list'>
                   {MiddleFooterLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.title}</a>
                    </li>
                   ))}
                </ul>
            </div>
            <div className='links-1 right-links'>
                <h4>
                    Earn Money
                </h4>
                <ul className='custom-list'>
                {RightFooterLinkes.map((link, index) => (
                    <li key={index} >
                        <a href={link.url}>{link.title}</a>
                    </li>
                ))}
                </ul>
                </div>
                </div>
                </div>
                <div className='footer-info'>
                <p className='footer-text'>©{currentYear}Lasles<span>VPN</span></p>
                <p className='footer-text'>
                    Developed by Jolanta  Galczynska
                </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;