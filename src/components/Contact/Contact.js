import React, { Component } from 'react';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import AquariumLogo from '../../images/AquariumLogo-2.png';
import BurgerFries from '../../images/BurgerFries.jpg';
import RiceBowl from '../../images/RiceBowlChkn.jpg';

import './contact.css';

class Contact extends Component {
    render () {
        return(
            <div className="contact-container">
                <HeaderTwo />
                <div className="contact-wrap">
                    <h1>Contact Us</h1>
                    <p className='contact-description-address'>
                    Please contact us with any questions or concerns.<br/>
                    We are more than happy to help with anything you need.
                    </p>
                    <img src={AquariumLogo} alt='aquarium logo' className='contact-aqua-logo'/>
                    <p className='contact-description-address'>
                        12033 South Lone Peak Parkway Draper, UT 84020
                    </p>
                    <div className='contact-info'>
                        <div className='keith-info'>
                            <h3>Keith Prows PMP</h3>
                            <p>General Manager</p>
                            <p>Office: (801) 355-3474 x449</p>
                            <p>Mobile: (801) 633-6991</p>
                            <p>keith@iconculinary.com</p>
                        </div>
                        <div className='chelsea-info'>
                            <h3>Chelsea</h3>
                            <p>Event Coordinator</p>
                            <p>Office: (801) 444-4444 x444</p>
                            <p>Mobile: (801) 444-4444</p>
                            <p>chelsea@iconculinary.com</p>
                        </div>
                    </div>
                    <div className='contact-images'>
                        <img src={BurgerFries} alt='steak and potatoes'/>
                        <img src={RiceBowl} alt='fruite dessert'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;