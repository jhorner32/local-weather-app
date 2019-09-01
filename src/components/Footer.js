import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    const date = new Date();
    const year = String(date).split(' ').splice(3, 1)[0];

    return (
        <footer className="footer-container">
            <p>&copy; {year} | <a href="https://www.jeffnhorner.com" target="_blank">Coded by Jeff Horner</a> | <a href="https://github.com/jeffnhorner/local-weather-app" target="_blank">View On Github</a></p>
        </footer>
    )
};

export default Footer;