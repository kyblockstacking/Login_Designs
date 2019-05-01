import React, { Component } from 'react';
import '../Stylesheets/Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <a className='nav-links' href='/'>Home</a>
                <a className='nav-links' href='/design-1'>Design 1</a>
            </nav>
        );
    };
};