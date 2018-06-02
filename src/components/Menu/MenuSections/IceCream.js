import React, { Component } from 'react';
import './rightMenu.css';
import IceCreamCones from '../../../images/MenuIceCream.jpg';

class IceCream extends Component {

    render(){
        return (
            <div className='right-menu-wrap'>
                <div className='right-menu-images'>
                    <img src={IceCreamCones} alt='ice cream cones'/>
                </div>
                <div className='right-menu-text'>
                    <h2>Hand Scooped Ice Cream</h2>
                    <div className='right-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>One Scoop</h3>
                                <h3>$3.49</h3>
                            </div>
                            <div>
                                <h3>Two Scoops</h3>
                                <h3>$3.99</h3>
                            </div>
                        </div>
                    </div>
                    <h2>Icee</h2>
                    <div className='right-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Medium - 16oz</h3>
                                <h3>$3.99</h3>
                            </div>
                            <div>
                                <h3>Large - 20oz</h3>
                                <h3>$4.99</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-menu-images-mobile'>
                    <img src={IceCreamCones} alt='ice cream cones'/>
                </div>
            </div>
        )
    }
}

export default IceCream;