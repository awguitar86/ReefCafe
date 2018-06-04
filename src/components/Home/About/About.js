import React, { Component } from 'react';
import './about.css';
import Salad from '../../../images/SaladAppleBlueberry.jpg';
import RiceBowl from '../../../images/RiceBowlSteak.jpg';
import SaladMobile from '../../../images/SaladHomePage.jpg';

export default class About extends Component {
    render () {
        return(
            <div className="about-container">
                <div className='about-wrap'>
                    <div className="about">
                        <h1>ABOUT US</h1>
                        <p>
                            The Reef Cafe is the amazing new cafe inside the Loveland Living Planet Aquarium.
                            The creators, owners, chefs and managers have been in the food business for over 40 years.
                            They bring experience and knowledge that make the Reef Cafe one of the best places to bring
                            your family for a delicious meal while you visit the wonderful Aquarium. We have entrées, snacks,
                            and treats for every member for your family and group. We want to make your experience the best
                            experience possible. We view our employees and customers as family and family always comes first.
                        </p>
                    </div>

                    <div className="about-img">
                        <img src={Salad} alt="Salad"/>
                        <img src={RiceBowl} alt="Rice Bowl"/>
                    </div>
                    <div className='about-img-mobile'>
                        <img src={SaladMobile} alt='salad'/>
                    </div>
                </div>
            </div>
        )
    }
}