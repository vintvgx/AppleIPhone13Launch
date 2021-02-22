import React from 'react';


function Footer() {

const year = new Date().getFullYear()
    return (
        <footer>
        <h4>This is my rendition of the Apple website for the IPhone 13 drop using React & Bootstrap.</h4>
            <p>BANDIT PRODUCTIONS Copyright {year}</p>
        </footer>
    ) 
}

export default Footer;