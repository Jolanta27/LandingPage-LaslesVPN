import './PaymentSection.css';
import payment from '../payment.JPG';

const PaymentSection = () => {
    return (
        <>
        <div className="plan-description">
        <h3>Choose your plan</h3>
        <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
        <div className="choose-boxes">
        <div className='fst-box'>
            <img src={payment} className="cake-pic" alt="cake" />
            <p className='main-desc'>Free Plan</p>
            <div className='content-features'>
            <p>Unlimited Bandwith</p>
            <p>Encrypted Connection</p>
            <p>No Traffic Logos</p>
            <p>Works On All Devices</p>
            </div>
            <p className='price'>Free</p>
            <button className='pay-btn'>Select</button>
        </div>
        <div className='scn-box'>
        <img src={payment} className="cake-pic" alt="cake" />
        <p className='price'>Standard Plan</p>
        <div className='content-features'>
        <p>Unlimited Bandwith</p>
        <p>Encrypted Connection</p>
        <p>Yes Traffic Logs</p>
        <p>Works On All Devices</p>
        <p>Connect Anywhere</p>
        </div>
        <p className='price'>$9<span className='price-details'>/mo</span></p>
        <button className='pay-btn'>Select</button>
        </div>
        <div className='trd-box'>
        <img src={payment} className="cake-pic" alt="cake" />
        <p className='price'>Premium Plan</p>
        <div className='content-features'>
        <p>Unlimited Bandwith</p>
        <p>Encrypted Connection</p>
        <p>Yes Traffic Logs</p>
        <p>Works On All Devices</p>
        <p>Connect Anywhere</p>
        <p>Get New Features</p>
        </div>
        <p className='price'>$12s<span className='price-details'>/mo</span></p>
         <button className='pay-btn'>Select</button>
        </div>
        </div>
        </>
    )
}
export default PaymentSection;