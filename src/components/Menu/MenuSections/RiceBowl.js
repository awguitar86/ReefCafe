import React, { Component } from 'react';
import './rightMenu.css';
import RiceBowl from '../../../images/MenuRiceBowlChkn.jpg';

class Rice extends Component {

    render(){
        return (
            <div className='right-menu-wrap'>
                <div className='right-menu-images'>
                    <img src={RiceBowl} alt='Rice Bowl'/>
                </div>
                <div className='right-menu-text'>
                    <h2>Rice or Noodle Bowl</h2>
                    <div className='right-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Sweet Chile Shrimp - Grilled Chicken - Steak</h3>
                                <h3>$9.49</h3>
                            </div>
                            <p>Steamed rice or rice noodles with stir fried vegetables and choice of meat with Teriyaki sauce or Thai Peanut sauce.</p>
                        </div>
                    </div>
                </div>
                <div className='right-menu-images-mobile'>
                    <img src={RiceBowl} alt='Rice Bowl'/>
                </div>
            </div>
        )
    }
}

export default Rice;