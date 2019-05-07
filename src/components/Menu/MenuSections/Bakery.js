import React, { Component } from 'react';
import './leftMenu.css';
import Brownies from '../../../images/MenuBrownies.jpg';
import Cupcakes from '../../../images/MenuCupcakes.jpg';
import Cookies from '../../../images/MenuCookies.jpg';

class Bakery extends Component {

    render(){
        return (
            <div className='left-menu-wrap'>
                <div className='left-menu-text'>
                    <h2>Bakery</h2>
                    <div className='left-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Uncrustable Sandwich</h3>
                                <h3>$2.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Cupcakes</h3>
                                <h3>$2.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Cake Bites</h3>
                                <h3>$2.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Churro</h3>
                                <h3>$3.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Decorated Cookie</h3>
                                <h3>$4.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Rice Crispy Treat</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Penguin Donut</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Pretzel</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Pretzel Bites</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Gluten-free Brownie</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Gourmet Brownie</h3>
                                <h3>$5.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='left-menu-images'>
                    <img src={Brownies} alt='brownies'/>
                    <img src={Cupcakes} alt='cupcakes'/>
                    <img src={Cookies} alt='cookies'/>
                </div>
            </div>
        )
    }
}

export default Bakery;