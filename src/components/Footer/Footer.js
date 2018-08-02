import React from 'react';
import './Footer.css';
import coffee from '../../images/coffee.png';

const Footer = (props) => {
    return (
        <footer>
            <h3>Made with</h3> <img src={coffee} /> <h3>by Skyelah</h3>
            <h2> Also uses ReactTable </h2>

        </footer>
    );
}



export default Footer;