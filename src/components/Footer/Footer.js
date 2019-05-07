import React, { Component } from 'react';
import './footer.css';
import IconLogo from '../../images/IconCulinaryLogo.png';
import facebook from '../../images/FacebookLogo.svg';
import insta from '../../images/InstagramLogo.svg';
// import MeatPieLogo from '../../images/MeatPieWagon-Logo.png';

export default class Footer extends Component {
    render () {
        return(
            <div className="footer-container">
                <div className='footer-wrap'>
                    <div className="footer-left">
                        <a className="icon-culinary-logo" href='http://iconculinary.com/' target="_blank" rel="noopener noreferrer"><img src={IconLogo} alt='reef cafe logo'/></a>
                        <a className="facebook-logo" href='https://www.facebook.com/The-Reef-Cafe-1781006448614622/' target='_blank' rel="noopener noreferrer"><img src={facebook} alt='facebook logo'/></a>
                        <a className="insta-logo" href='https://www.instagram.com/thereefcafe/' target='_blank' rel="noopener noreferrer"><img src={insta} alt='instagram logo'/></a>
                    </div>

                    <div className="footer-right">
                        <p>Website by Austin Wright</p>
                        <p>Copyright © 2018 Icon Culinary. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        )
    }
}