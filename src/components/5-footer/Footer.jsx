import React from 'react';
import './footer.css';

const Footer = () => {
    return ( 
        <footer className='flex foot'>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Article</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Speaking</a></li>
                <li><a href="/">Uses</a></li>
            </ul>
            <p>© Copyright 2023, All Rights Reserved by Mustafa Ahmed</p>
        </footer>
     );
}
 
export default Footer;