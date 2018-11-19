import React, { Component } from 'react';
import './leftMenu.css';
import Burger from '../../../images/MenuBurger.jpg';
import GrilledCheese from '../../../images/MenuGrilledCheese.jpg';

class Sandwiches extends Component {

    render(){
        return (
            <div className='left-menu-wrap'>
                <div className='left-menu-text'>
                    <h2>Sandwiches & Burgers</h2>
                    <div className='left-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Applewood Smoked Pulled Pork Burger</h3>
                                <h3>$9.49</h3>
                            </div>
                            <p>Tender roasted pork with a fresh apple slaw and choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Reef Burger</h3>
                                <h3>$9.49</h3>
                            </div>
                            <p>Fresh ground chuck, choice of cheese, maple bacon, lettuce, tomato and onion, served on a fresh baked toasted bun.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Garlic Parmesan Burger</h3>
                                <h3>$9.49</h3>
                            </div>
                            <p>Garlic and parmesan cheese, lettuce, tomato and onion served on a fresh baked toasted bun.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Teriyaki Pineapple Burger</h3>
                                <h3>$9.49</h3>
                            </div>
                            <p>Freshly grilled hamburger patty with grilled pineapple and teriyaki sauce smothering the fresh baked bun.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Grilled Chicken Club</h3>
                                <h3>$9.49</h3>
                            </div>
                            <p>On sourdough bread with grilled chicken, bacon, lettuce, tomato, avocado and cheese.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Grilled Chicken Pineapple Teriyaki Sandwich</h3>
                                <h3>$9.49</h3>
                            </div>
                            <p>Sweet grilled pineapple ring on a grilled chicken breast with sweet teriyaki sauce on a lightly toasted bun.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Grown-ups Grilled Cheese</h3>
                                <h3>$7.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Jumbo Kosher Dog</h3>
                                <h3>$6.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='left-menu-images'>
                    <img src={Burger} alt='Burger'/>
                    <img src={GrilledCheese} alt='Grilled Cheese'/>
                </div>
            </div>
        )
    }
}

export default Sandwiches;