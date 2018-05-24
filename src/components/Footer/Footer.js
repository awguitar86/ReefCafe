import React, { Component } from 'react';
import './footer.css';
import IconLogo from '../../images/IconCulinary-KnifeLogo.svg';
import MeatPieLogo from '../../images/MeatPieWagon-Logo.png';

export default class Footer extends Component {
    render () {
        return(
            <div className="footer-container">
                <div className='footer-wrap'>
                    <div className="footer-left">
                        <p>Please visit our other amazing companies!</p>
                        <div className='footer-image-wrap'>
                            <a href=''><img src={IconLogo} alt='reef cafe logo'/></a>
                            <a href=''><img src={MeatPieLogo} alt='meat pie wagon logo' /></a>
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