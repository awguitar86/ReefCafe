import React, { Component } from 'react';
import './homeheaderTwo.css';
import ReefLogo from '../../../images/ReefCafeLogo.svg';
import { Link } from 'react-router-dom';
import HamDropdown from '../../HamDropDown/HamDropdown';


export default class HeaderTwo extends Component {
    render () {
        let {className} = this.props;
        return(
            <div className={className}>
                <div className="home-h2-container">
                    <div className="home-h2-logo-container">
                        <Link to='/' ><img src={ReefLogo} alt='icon culinary logo'/></Link>
                    </div>
                    <nav className="home-h2-nav">
                        <Link to='/' className="home-h2-home">HOME</Link>
                        <Link to='/menu' className="home-h2-home">MENU</Link>
                        <Link to='/contact' className="home-h2-contact">CONTACT</Link>
                        <a href='https://reefcafe.mobilebytes.com/' target='_blank' rel="noopener noreferrer" className='order-online'>ORDER</a>
                    </nav>
                    <HamDropdown />
                </div>
            </div>
        )
    }
}