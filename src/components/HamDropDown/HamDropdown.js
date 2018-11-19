import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUid } from '../../utilities/uid';
import './hamDropDown.css';
import hamburgerMenu from '../../images/hamburgerMenu.svg';
import facebook from '../../images/FacebookLogo.svg';
import instagram from '../../images/InstagramLogo.svg';
import ReefLogo from '../../images/ReefCafeLogo.svg';


export default class HamDropdown extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            currentTimeout: null,
        }
    }

    toggle(){
        // debugger;

        if (this.state.currentTimeout !== null) {
            return;
        }

        this.setState({
            // open: true
            open: !this.state.open,
            // currentTimeout: setTimeout(() => this.setState({ currentTimeout: null }), 50),
        });
    }

    handleClick(e) {
        console.log('clicked on ', e.target);
        console.log(this.state);
        this.toggle();
    }

    render () {
        let styles = {zIndex: 12345};
        return (
            <div className='ham-wrap'>
                <div onClick={this.handleClick.bind(this)} className='hamburger-menu'>
                    <img src={hamburgerMenu} alt='hamburger menu'/>
                </div>
                <div className={'backdrop ' + (this.state.open ? 'open' : '')} onClick={this.handleClick.bind(this)}/>
                {this.state.open &&
                <div className='ham-dropdown-menu' style={styles}>
                    <div onClick={this.handleClick.bind(this)} className='ham-header'>
                        <div className='ham-social'>
                            <a href='https://www.facebook.com/The-Reef-Cafe-1781006448614622/'><img src={facebook} alt='facebook logo'/></a>
                            <a href='https://www.instagram.com/thereefcafe/'><img src={instagram} alt='instagram logo'/></a>
                        </div>
                        <div className='ham-logo'>
                            <img src={ReefLogo} alt='icon culinary logo'/>
                        </div>
                        <div className='ham-close'>&times;</div>
                    </div>
                    <Link to='/' onClick={this.handleClick.bind(this)} className='ham-menu-items'>HOME</Link>
                    <Link to='/menu' onClick={this.handleClick.bind(this)} className='ham-menu-items'>MENU</Link>
                    <Link to='/contact' onClick={this.handleClick.bind(this)} className='ham-menu-items'>CONTACT</Link>
                    <a href='https://reefcafe.mobilebytes.com/' target='_blank' onClick={this.handleClick.bind(this)} className='ham-menu-items'>ORDER</a>
                </div>}
            </div>
        )
    }
}