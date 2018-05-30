import React, { Component } from 'react';
import './rightMenu.css';
import Beverage from '../../../images/MenuBeverage.jpg';

class Beverages extends Component {

    render(){
        return (
            <div className='right-menu-wrap'>
                <div className='right-menu-images'>
                    <img src={Beverage} alt='pic of a can of coke'/>
                </div>
                <div className='right-menu-text'>
                    <h2>Beverages</h2>
                    <div className='right-menu-items'>
                        <div className='menu-item'>
                            <p>Coke, Diet Coke, Coke Zero, Dr. Pepper, Root Beer,<br/> Fresca, Fruit Punch, Lemonade</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Small - 22oz</h3>
                                <h3>$2.99</h3>
                            </div>
                            <div>
                                <h3>Medium - 32oz</h3>
                                <h3>$3.65</h3>
                            </div>
                            <div>
                                <h3>Large - 44oz</h3>
                                <h3>$3.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Milk, Chocolate Milk, Capri Sun</h3>
                                <h3>$1.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Monster</h3>
                                <h3>$3.50</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Beverages;