import React, { Component } from 'react';

import Header from '../include/header';
import Aside from '../include/aside';
import Footer from '../include/footer';

import '../dist/css/style.min.css';

class Master extends Component {
  render() {
    return (
    	<div className="content">
        <Header />
        <Aside />
        <Footer />
      </div>
    );
  }
}

export default Master;
