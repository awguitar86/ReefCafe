import React, { Component } from 'react';
import './headerTwo.css';
import ReefLogo from '../../images/ReefCafeLogo.svg';
import { Link } from 'react-router-dom';
// import { getUid } from '../../utilities/uid';
import HamDropdown from '../HamDropDown/HamDropdown';
// import facebook from '../../images/FacebookLogo.svg';
// import instagram from '../../images/InstagramLogo.svg';


export default class HeaderTwo extends Component {
    render () {
        return(
            <div className='h2-wrap'>
                <div className="h2-container">
                    {/* <div className='h2-social'>
                        <a href='https://www.facebook.com/The-Reef-Cafe-1781006448614622/' target='_blank' rel="noopener noreferrer"><img src={facebook} alt='facebook logo'/></a>
                        <a href='https://www.instagram.com/thereefcafe/' target='_blank' rel="noopener noreferrer"><img src={instagram} alt='instagram logo'/></a>
                    </div> */}
                    <div className="h2-logo-container">
                        <Link to='/' ><img src={ReefLogo} alt='icon culinary logo'/></Link>
                    </div>
                    <nav className="h2-nav">
                        <Link to='/' className="h2-home">HOME</Link>
                        <Link to='/menu' className="h2-home">MENU</Link>
                        <Link to='/contact' className="h2-contact">CONTACT</Link>
                        <a href='https://reefcafe.mobilebytes.com/' target='_blank' rel="noopener noreferrer">ORDER</a>
                    </nav>
                    <HamDropdown />
                </div>
            </div>
        )
    }
}