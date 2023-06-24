import React from 'react';
import Navbar from './Navbar';
import About from './About';

import './HomePage.css';
import Content from './Content';

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <header className="header">
      <Navbar />

        <div className="title-box">
          <h1 className='header-title'>Lorem ipsum dolor sit amet consectetur. Volutpat.</h1>

          <button className="header-button">Lorem ipsum</button>
        </div>
      </header>
      {/* <About /> */}

      {/* <Content /> */}
    </div>
  );
};

export default HomePage;