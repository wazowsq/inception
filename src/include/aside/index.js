import React from 'react';

import Footer from '../footer';

const Header = () => {
    return (
        <aside>
            <article>
                <section className="home" id="home">
                    <div className="full-opacity">
                    
                    </div>
                </section>
                <section className="about" id="about">
                    <div className="full-content">
                    
                    </div>
                </section>
                <section className="experience" id="experience">
                    <div className="full-content">
                    
                    </div>
                </section>
                <section className="data">
                    <div className="full-opacity">
                    
                    </div>
                </section>
                <section className="portfolio" id="portfolio">
                    <div className="full-content">
                    
                    </div>
                </section>
                <section className="company">
                    <div className="full-content">
                    
                    </div>
                </section>
                <section className="contact" id="contact">
                    <div className="full-opacity">
                        <div className="item-number">
                            <p className="number">04</p>
                            <p className="title">contact</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </article>
        </aside>
    );
}

export default Header;