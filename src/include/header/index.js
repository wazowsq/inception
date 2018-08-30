import React from 'react';

import Navbar from '../navbar';
import ContactNav from '../contact';
import SocialNav from '../social';

const Header = () => {
    return (
        <header>
            <Navbar />
            <ContactNav />
            <SocialNav />
        </header>
    );
}

export default Header;