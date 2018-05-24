import React, { Component } from 'react';
import ReefHomeLogo from '../../../images/ReefCafeLogo-Home.svg';
import Cooking from '../../../images/CookingInKitchen.jpg';
import Leaves from '../../../images/GrowTowerLeaves.jpg';
import JellyFish from '../../../images/JellyFish.jpg';
import Salads from '../../../images/SaladLine.jpg';

import './hero.css';

export default class Hero extends Component {
    render () {
        return(
            <div className='hero-wrap'>
                <div className='hero-logo'><img src={ReefHomeLogo} alt='icon culinary logo'/></div>
                <div className='hero-pic'>
                    <img src={Cooking} alt='Picture of Cooking'/>
                    <img src={Leaves} alt='picture of leaves'/>
                    <img src={JellyFish} alt='picture of jelly fish'/>
                    <img src={Salads} alt='picture of salads'/>
                </div>
                <div className='hero-welcome'>
                    <p>
                        Welcome to the Reef Cafe, the exclusive cafe inside
                        the Loveland Living Planet Aquarium
                    </p>
                </div>
            </div>
        )
    }
}