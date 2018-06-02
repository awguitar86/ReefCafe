import React, { Component } from 'react';
import './rightMenu.css';
import Chocolates from '../../../images/MenuChocolates.jpg';
import RaspberryChocolates from '../../../images/MenuChocolateRasp.jpg';

class Chocolate extends Component {

    render(){
        return (
            <div className='right-menu-wrap'>
                <div className='right-menu-images'>
                    <img src={Chocolates} alt='chocolates'/>
                    <img src={RaspberryChocolates} alt='raspberries in chocolate'/>
                </div>
                <div className='right-menu-text'>
                    <h2>Chocolate</h2>
                    <div className='right-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Chocolate Covered Raspberries</h3>
                                <h3>$3.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Sea Salt Caramel</h3>
                                <h3>$3.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Caramel Sucker</h3>
                                <h3>$3.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Caramel Pretzel</h3>
                                <h3>$3.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Caramel</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Rocky Road</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Dipped Oreos</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Chocolate Energy Bar</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-menu-images-mobile'>
                    <img src={Chocolates} alt='chocolates'/>
                    <img src={RaspberryChocolates} alt='raspberries in chocolate'/>
                </div>
            </div>
        )
    }
}

export default Chocolate;