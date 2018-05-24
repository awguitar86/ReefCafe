import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import router from './router.js';

import Home from './components/Home/Home/Home';
import Menu from './components/Menu/Menu';
import Contact from './components/Contact/Contact';


import './App.css';
// import Header from './components/Home/Header/Header';
import Footer from './components/Footer/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="body">
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    );
  }
}

