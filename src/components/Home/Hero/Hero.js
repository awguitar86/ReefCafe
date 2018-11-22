import React, { Component } from 'react';
import {Fade} from 'react-slideshow-image';
import ReefHomeLogo from '../../../images/ReefCafeLogo-Home.svg';
import Cooking from '../../../images/HeroCooking.jpg';
import Leaves from '../../../images/HeroGrowTower.jpg';
import JellyFish from '../../../images/HeroJellyFish.jpg';
import Salads from '../../../images/HeroSaladLine.jpg';
import Brownie from '../../../images/HeroBrownie.jpg';
import ChickenFingers from '../../../images/HeroChickenFingers.jpg';
import Cupcake from '../../../images/HeroCupcake.jpg';
import Hamburger from '../../../images/HeroHamburger.jpg';
import JellyFishDark from '../../../images/HeroJellyFishDark.jpg';
import PecanSalad from '../../../images/HeroPecanSalad.jpg';
import FruitShark from '../../../images/HeroFruitSharks.jpg';
import SteakBowl from '../../../images/HeroSteakBowl.jpg';
import StrawberrySalad from '../../../images/HeroStrawberrySalad.jpg';
import SweetPotatoSalad from '../../../images/HeroSweetPotatoSalad.jpg';
import TomatoSalad from '../../../images/HeroTomatoSalad.jpg';
import RiceBowl from '../../../images/HeroRiceBowl.jpg';
import Fish from '../../../images/HeroFish.jpg';
import Cookies from '../../../images/HeroCookies.jpg';
import './hero.css';

export default class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images1: [ Leaves, JellyFishDark, Cupcake, RiceBowl ],
            images2: [ Cooking, Brownie, ChickenFingers, SteakBowl ],
            images3: [ RiceBowl, FruitShark, Hamburger, TomatoSalad ],
            images4: [ JellyFish, PecanSalad, StrawberrySalad, SweetPotatoSalad ],
            images5: [ Salads, Fish, Cookies, Leaves ],
            properties1: {
                duration: 8000,
                transitionDuration: 1000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            properties2: {
                duration: 4000,
                transitionDuration: 1000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            properties3: {
                duration: 10000,
                transitionDuration: 1000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            properties4: {
                duration: 3000,
                transitionDuration: 1000,
                infinite: true,
                indicators: false,
                arrows: false
            },
            properties5: {
                duration: 6000,
                transitionDuration: 1000,
                infinite: true,
                indicators: false,
                arrows: false
            }
        }
    }

    render () {
        return(
            <div className='hero-wrap'>
                <div className='hero-logo'><img src={ReefHomeLogo} alt='icon culinary logo'/></div>
                <div className='hero-pic'>
                    <div className='hero-first-pic'>
                        <Fade {...this.state.properties1}>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images1[0]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images1[1]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images1[2]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images1[3]})`}}>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='hero-second-pic'>
                        <Fade {...this.state.properties2}>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images2[0]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images2[1]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images2[2]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images2[3]})`}}>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='hero-third-pic'>
                        <Fade {...this.state.properties3}>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images3[0]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images3[1]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images3[2]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images3[3]})`}}>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='hero-fourth-pic'>
                        <Fade {...this.state.properties4}>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images4[0]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images4[1]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images4[2]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images4[3]})`}}>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='hero-fifth-pic'>
                        <Fade {...this.state.properties5}>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images5[0]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images5[1]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images5[2]})`}}>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div style={{'backgroundImage': `url(${this.state.images5[3]})`}}>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    {/* <img src={Leaves} alt='picture of leaves'/>
                    <img src={Cooking} alt='Picture of Cooking' className='cooking'/>
                    <img src={RiceBowl} alt='picture of jelly fish' className='ricebowl'/>
                    <img src={JellyFish} alt='picture of jelly fish'/>
                    <img src={Salads} alt='picture of salads' className='salads'/> */}
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