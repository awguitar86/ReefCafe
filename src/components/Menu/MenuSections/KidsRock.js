import React, { Component } from 'react';
import './leftMenu.css';
import KidsGrilledCheese from '../../../images/MenuKidsGrilledCheese.jpg';
import Slider from '../../../images/MenuKidsSlider.jpg';

class KidsRock extends Component {

    render(){
        return (
            <div className='left-menu-wrap'>
                <div className='left-menu-text'>
                    <h2>Kids Rock!</h2>
                    <div className='left-menu-items'>
                        <div className='menu-item'>
                            <p>Kids meal served with choice of fries, chips, salad, or a fresh fruit cup. Includes small drink</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Nachos</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Mac & Cheese</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Cheese Quesadilla</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Grilled Cheese</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Cheeseburger Slider</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Hot Dog</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='left-menu-images'>
                    <img src={KidsGrilledCheese} alt='Kids Grilled Cheese'/>
                    <img src={Slider} alt='Slider'/>
                </div>
            </div>
        )
    }
}

export default KidsRock;