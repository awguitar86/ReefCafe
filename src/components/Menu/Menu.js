import React, { Component } from 'react';
import HeaderTwo from '../HeaderTwo/HeaderTwo';
import './menu.css';
import PDFMenu from './ReefCafeMenu.pdf';

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
                        <a href='https://reefcafe.mobilebytes.com/' target='_blank' className='order-online'><button>Order Online</button></a>
                        <h1>MENU</h1>
                        <a href='https://reefcafe.mobilebytes.com/' target='_blank' className='order-online-mobile'><button>Order Online</button></a>
                        <a href={PDFMenu} download><button>Download Menu</button></a>
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