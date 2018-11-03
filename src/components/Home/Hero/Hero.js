import React, { Component } from 'react';
import ReefHomeLogo from '../../../images/ReefCafeLogo-Home.svg';
import Cooking from '../../../images/CookingInKitchen.jpg';
import Leaves from '../../../images/GrowTowerLeaves.jpg';
import JellyFish from '../../../images/JellyFish.jpg';
import Salads from '../../../images/SaladLine.jpg';
import RiceBowl from '../../../images/HeroRiceBowl.jpg';

import './hero.css';

export default class Hero extends Component {
    render () {
        return(
            <div className='hero-wrap'>
                <div className='hero-logo'><img src={ReefHomeLogo} alt='icon culinary logo'/></div>
                <div className='hero-pic'>
                    <img src={Leaves} alt='picture of leaves'/>
                    <img src={Cooking} alt='Picture of Cooking' className='cooking'/>
                    <img src={RiceBowl} alt='picture of jelly fish' className='ricebowl'/>
                    <img src={JellyFish} alt='picture of jelly fish'/>
                    <img src={Salads} alt='picture of salads' className='salads'/>
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