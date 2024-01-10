import netflix from '../Netflix.png';
import reddit from '../Reddit.png';
import amazon from '../Amazon.png';
import discord from '../Discord.png';
import spotify from '../Spotify.png';
import kim from '../kim.png';
import yessica from '../yessica.png';
import viezh from '../viezh.png';
import './RecomendationSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const RecomendationSection = () => {
    return (
        <>
        <div className="img-companies">
            <img src={netflix} alt="netflix" />
            <img src={reddit} alt="reddit" />
            <img src={amazon} alt="amazon" />
            <img src={discord} alt="discord" />
            <img src={spotify} alt="spotify" />
        </div>
        <div className='happy-customer-boxes-main'>
        <h3>Trusted By Thousands of Happy Customer</h3>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        <div className='happy-customer-boxes'>
        <div className='happy-customer-1'>
            <div className='customer-presentation'>
                <div>
                <img src={viezh} alt="customer" />
                </div>
                <div>
            <p>Wiezh Robert</p>
            <p>Warsaw, Poland</p>
            </div>
            <div className='rate-star'>
            <p>4.5</p>
            <FontAwesomeIcon icon={faStar} />
            </div>
            </div>
            <p>"Wow... I am very happy to use this VPN, it turned out to be more than expectations and so far there have been no problems. LaslesVPN always the best".</p>
        </div>
        <div className='happy-customer-2'>
        <div className='customer-presentation'>
            <div>
            <img src={yessica} alt="customer" />
            </div>
            <div>
                <p>Yessica Christy</p>
                <p>Shanxi, China</p>
                </div>
                <div className='rate-star'>
                <p>4.5</p>
                <FontAwesomeIcon icon={faStar} className='yellow-star'/>
                </div>
                </div>
            <p>"I like it because i like to travel far and still can connect with high speed".</p>
        </div>
        <div className='happy-customer-3'>
        <div className='customer-presentation'>
            <div>
            <img src={kim} alt="customer" />
            </div>
            <div>
                <p>Kim Young Jou</p>
                <p>Seoul, South Korea</p>
                </div>
                <div className='rate-star'>
                <p>4.5</p>
                <FontAwesomeIcon icon={faStar} />
                </div>
                </div>
        <p>This is very unusual for my business that currently requires a virtual private network that has high security".</p>
        </div>
        </div>
        </div>
        </>
    )
}
export default RecomendationSection;