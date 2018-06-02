import React, { Component } from 'react';
import './rightMenu.css';
import AppleSalad from '../../../images/MenuAppleSalad.jpg';
import StrawberrySalad from '../../../images/MenuStrawberrySalad.jpg';

class Salads extends Component {

    render(){
        return (
            <div className='right-menu-wrap'>
                <div className='right-menu-images'>
                    <img src={AppleSalad} alt='Apple Salad'/>
                    <img src={StrawberrySalad} alt='Strawberry Salad'/>
                </div>
                <div className='right-menu-text'>
                    <h2>Salads</h2>
                    <div className='right-menu-items'>
                        <div className='menu-item'>
                            <div>
                                <h3>Strawberry Pecan Salad</h3>
                                <h3>$8.99</h3>
                            </div>
                            <p>Fresh spring greens, fresh strawberries, candied pecans, blue cheese strawberry vinaigrette and grilled chicken.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Chop Cobb Salad</h3>
                                <h3>$8.99</h3>
                            </div>
                            <p>Chopped mixed greens, bacon, tomatoes, cheddar, eggs, grilled chicken, and choice of dressing.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Apple, Blueberry, Bacon Salad</h3>
                                <h3>$8.99</h3>
                            </div>
                            <p>Blueberries, fresh apples, diced maple bacon, grilled chicken breast, pecans, spring greens and local honey drizzle.</p>
                        </div>
                        <div className='menu-item'>
                            <div>
                                <h3>Caesar Salad</h3>
                                <h3>$7.99</h3>
                            </div>
                            <p>Romaine and fresh dressing tossed with parmesan cheese and topped with grilled chicken and fresh made croutons.</p>
                        </div>
                    </div>
                </div>
                <div className='right-menu-images-mobile'>
                    <img src={AppleSalad} alt='Apple Salad'/>
                    <img src={StrawberrySalad} alt='Strawberry Salad'/>
                </div>
            </div>
        )
    }
}

export default Salads;