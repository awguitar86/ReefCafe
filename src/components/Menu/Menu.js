import React, { Component } from 'react';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import './menu.css';

import Sandwiches from './MenuSections/Sandwiches';
import Salads from './MenuSections/Salads';
import Pizza from './MenuSections/Pizza';
import RiceBowls from './MenuSections/RiceBowl';
import KidsRock from './MenuSections/KidsRock';
import Beverages from './MenuSections/Beverages';
import Coffee from './MenuSections/Coffee';
import IceCream from './MenuSections/IceCream';
import Bakery from './MenuSections/Bakery';
import Chocolate from './MenuSections/Chocolate';

class Menu extends Component {

    render(){
        return (
            <div className='menu-wrap'>
                <HeaderTwo />
                <div className='menu-container'>
                    <div className='menu-header'>
                        <button>Order Online</button>
                        <h1>MENU</h1>
                        <button>Download Menu</button>
                    </div>
                    <div className='menu-body'>
                        <Sandwiches />
                        <Salads />
                        <Pizza />
                        <RiceBowls />
                        <KidsRock />
                        <Beverages />
                        <Coffee />
                        <IceCream />
                        <Bakery />
                        <Chocolate />
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;