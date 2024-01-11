import './PaymentSection.css';
import payment from '../payment.JPG';

const contentFeatures = [
    'Unlimited Bandwith',
    'Encrypted Connection',
    'No Traffic Logos',
    'Works On All Devices'
];

const standardFeatures = [
    'Connect Anywhere'
];

const standardContentFeatures = [...contentFeatures, ...standardFeatures];

const standardPremiumFeatures = [
    'Get New Features'
]

const premiumFeatures = [...standardContentFeatures, ...standardPremiumFeatures];

const PaymentSection = () => {
    return (
        <>
        <div className="plan-description">
        <h3>
            Choose your plan
        </h3>
        <p>
            Let's choose the package that is best for you and explore it happily and cheerfully
        </p>
        </div>
        <div className="choose-boxes">
        <div className='fst-box'>
            <img src={payment} className="cake-pic" alt="cake" />
            <p className='main-desc'>
                Free Plan
            </p>
            {contentFeatures.map((contentFeatures, index) => (
            <div className='content-features'>
            <p key={index} className='content-text-f'>{contentFeatures}</p>
            </div> 
            ))}
            <p className='price'>Free</p>
            <button className='pay-btn'>
                Select
            </button> 
        </div>
        <div className='scn-box'>
            <img src={payment} className="cake-pic" alt="cake" />
            <p className='price'>
                Standard Plan
            </p>
            {standardContentFeatures.map((standardContentFeatures, index) => (
            <div className='content-features'>
            <p key={index} className='content-text-f'>{standardContentFeatures}</p>
            </div>
            ))} 
            <p className='price'>
                $9<span className='price-details'>/mo</span>
            </p>
            <button className='pay-btn'>
                Select
            </button>
        </div>
        <div className='trd-box'>
            <img src={payment} className="cake-pic" alt="cake" />
            <p className='price'>
                Premium Plan
            </p>
            {premiumFeatures.map((premiumFeatures, index) => (
            <div className='content-features'>
            <p key={index} className='content-text-f'>{premiumFeatures}</p>
            </div>
            ))}
            <p className='price'>
                $12s<span className='price-details'>/mo</span>
            </p>
            <button className='pay-btn'>Select</button>
       </div>
        </div>
      </>
    );
}
export default PaymentSection;