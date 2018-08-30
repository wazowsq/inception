import React from 'react';

const Header = () => {
    return (
        <header>
            <ul className="contact">
                <li><i className="fas fa-envelope"></i><a href="" title="Mande um e-mail para mim">me@rafaeltorr.es</a></li>
                <li><i className="fas fa-phone"></i>+55 11 99106 5485 | +55 11 99910 2709</li>
            </ul>
            <ul className="social">
                <li><a href="" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                <li><a href="" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                <li><a href="" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="" title="Github"><i className="fab fa-github"></i></a></li>
                <li><a href="" title="Behance"><i className="fab fa-behance"></i></a></li>
                <li><a href="" title="Youtube"><i className="fab fa-youtube"></i></a></li>
            </ul>
        </header>
    );
}

export default Header;
