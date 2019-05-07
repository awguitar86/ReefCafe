import React, { Component } from 'react';
import './leftMenu.css';
import ChickenFingers from '../../../images/MenuChickenFingers.jpg';
import Nachos from '../../../images/MenuNachos.jpg';

class Pizza extends Component {

    render(){
        return (
            <div className='left-menu-wrap'>
                <div className='left-menu-text'>
                    <h2>Pizza & Stuff</h2>
                    <div className='left-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>7" Pizza</h3>
                                <h3>$8.49</h3>
                            </div>
                            <p>Pepperoni or Cheese</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Chicken Tenders</h3>
                                <h3>$8.49</h3>
                            </div>
                            <p>Tender Choice Breast Filet served with fries, chips or a fresh fruit cup.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Nachos</h3>
                                <h3>$8.49</h3>
                            </div>
                            <p>Chips, Cheese, Pico, cilantro and guacamole.<br/>Add grilled chicken for $2.00</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Bagged Potato Chips</h3>
                                <h3>$1.79</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Assorted Candy</h3>
                                <h3>$2.49</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Fruit Cup</h3>
                                <h3>$2.99</h3>
                            </div>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Side of Fries</h3>
                                <h3>$3.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='left-menu-images'>
                    <img src={ChickenFingers} alt='Burger'/>
                    <img src={Nachos} alt='Grilled Cheese'/>
                </div>
            </div>
        )
    }
}

export default Pizza;