import React from 'react';

import ContactNav from '../contact';
import SocialNav from '../social';

const Header = () => {
    return (
        <header>
            <ContactNav />
            <SocialNav />
        </header>
    );
}

export default Header;