import React, { Component } from 'react';
import './homeHeader.css';
import { Link } from 'react-router-dom';
import HamDropdown from '../../HamDropDown/HamDropdown';


export default class Header extends Component {
    render () {
        return(
            <div className='header-wrap'>
                <div className="header-container">
                    <nav className="nav">
                        <Link to='/' className="home">HOME</Link>
                        <Link to='/menu' className="home">MENU</Link>
                        <Link to='/contact' className="contact">CONTACT</Link>
                        <a href='https://reefcafe.mobilebytes.com/' target='_blank' rel="noopener noreferrer">ORDER</a>
                    </nav>
                    <HamDropdown />
                </div>
            </div>
        )
    }
}