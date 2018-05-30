import React, { Component } from 'react';
import './leftMenu.css';
import CoffeeCups from '../../../images/MenuCoffee.jpg';

class Coffee extends Component {

    render(){
        return (
            <div className='left-menu-wrap'>
                <div className='left-menu-text'>
                    <h2>Fresh Ground Coffee</h2>
                    <div className='left-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Small - 12oz</h3>
                                <h3>$3.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Medium - 16oz</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='left-menu-images'>
                    <img src={CoffeeCups} alt='coffee'/>
                </div>
            </div>
        )
    }
}

export default Coffee;