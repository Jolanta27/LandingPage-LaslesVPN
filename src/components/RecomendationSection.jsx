import kim from '../../src/pictures/kim.png';
import yessica from '../../src/pictures/yessica.png';
import viezh from '../../src/pictures/viezh.png';
import Netflix from '../../src/pictures/Discord.png';
import Reddit from '../../src/pictures/Reddit.png';
import Amazon from '../../src/pictures/Amazon.png';
import Discord from '../../src/pictures/Discord.png';
import Spotify from '../../src/pictures/Spotify.png';
import './styles/RecomendationSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const RecomendationSection = () => {
    const imageGallery = [
        Netflix,
        Reddit,
        Amazon,
        Discord,
        Spotify
    ]
    return (
        <>
        <div>
        <div id="testimonials" className="img-companies">
          {imageGallery.map((imageGallery, index) => (
            <img  key={index} src={imageGallery} alt={`Brand ${index + 1}`}/>
          ))}
        </div>
        <div className='customers'>
            <h3>
                Trusted By Thousands of Happy Customer
            </h3>
            <p>
                These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
            </p>
            <div className='customers-boxes'>
            <div className='happy-customer-1'>
                <div className='customer-presentation'>
                <div>
                <img src={viezh} alt="customer" />
                </div>
                 <div className='name-intro'>
                    <p>
                        Wiezh Robert
                    </p>
                    <p>
                        Warsaw, Poland
                    </p>
                </div>
                <div className='rate-star'>
                    <p>4.5</p>
                <FontAwesomeIcon icon={faStar} />
                </div>
                </div>
                <p>
                    "Wow... I am very happy to use this VPN, it turned out to be more than expectations and so far there have been no problems. LaslesVPN always the best"
                </p>
            </div>
            <div className='happy-customer-2'>
            <div className='customer-presentation'>
            <div>
            <img src={yessica} alt="customer" />
            </div>
            <div className='name-intro'>
                <p>
                    Yessica Christy
                </p>
                <p>
                    Shanxi, China
                </p>
                </div>
                <div className='rate-star'>
                <p>4.5</p>
                <FontAwesomeIcon icon={faStar} className='yellow-star'/>
                </div>
                </div>
                <p>
                    "I like it because i like to travel far and still can connect with high speed"
                </p>
            </div>
            <div className='happy-customer-3'>
            <div className='customer-presentation'>
                <div>
                <img src={kim} alt="customer" />
                </div>
            <div className='name-intro'>
                <p>
                    Kim Young Jou
                </p>
                <p>
                    Seoul, South Korea
                </p>
            </div>
                <div className='rate-star'>
                <p>4.5</p>
                <FontAwesomeIcon icon={faStar} />
                </div>
                </div>
                <p>
                    This is very unusual for my business that currently requires a virtual private network that has high security"
                </p>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default RecomendationSection;