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
                    <p className="sandwich-text">Side choices of fries, house-made chips, fresh fruit, or a side salad.</p>
                    <p className="sandwich-text">Cheese options: Cheddar, Provolone, Havarti, and Parmesan</p>
                    <div className='left-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Smoked Pulled Pork Burger</h3>
                                <h3>$10.49</h3>
                            </div>
                            <p>Tender roasted pork with melted aged cheddar cheese, fresh slaw and choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Reef Burger</h3>
                                <h3>$10.49</h3>
                            </div>
                            <p>Fresh ground beef, melted aged cheddar cheese, bacon, lettuce, tomato and onion, served on a fresh toasted bun with choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Garlic Parmesan Burger</h3>
                                <h3>$10.49</h3>
                            </div>
                            <p>Garlic and melted parmesan cheese, lettuce, tomato and onion served on a fresh toasted bun and choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Teriyaki Pineapple Burger</h3>
                                <h3>$10.49</h3>
                            </div>
                            <p>Freshly grilled beef patty with grilled pineapple, melted provolone cheese and teriyaki sauce on a fresh toasted bun and choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Grilled Chicken Club</h3>
                                <h3>$10.49</h3>
                            </div>
                            <p>Toasted sourdough bread with grilled chicken, bacon, lettuce, tomato, avocado and aged cheddar cheese with choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Grilled Chicken Pineapple Teriyaki Sandwich</h3>
                                <h3>$10.49</h3>
                            </div>
                            <p>Grilled pineapple ring on a grilled chicken breast with melted provolone cheese and teriyaki sauce on a fresh toasted bun with choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Grilled Cheese</h3>
                                <h3>$8.49</h3>
                            </div>
                            <p>Four delicious blended cheeses on toasted french bread with choice of side.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Kosher Hot Dog</h3>
                                <h3>$7.49</h3>
                            </div>
                            <p>Jumbo all beef frank on a toasted bun with choice of side.</p>
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