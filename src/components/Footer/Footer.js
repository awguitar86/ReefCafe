import React, { Component } from 'react';
import './footer.css';
import IconLogo from '../../images/IconCulinaryLogo.png';
// import MeatPieLogo from '../../images/MeatPieWagon-Logo.png';

export default class Footer extends Component {
    render () {
        return(
            <div className="footer-container">
                <div className='footer-wrap'>
                    <div className="footer-left">
                        <p>Check out our amazing parent company!</p>
                        <div className='footer-image-wrap'>
                            <a href='http://iconculinary.com/'><img src={IconLogo} alt='reef cafe logo'/></a>
                        </div>
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