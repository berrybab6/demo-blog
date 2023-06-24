import React from 'react';
import './Navbar.css';
import searchIcon from '../src/assets/icons/search.svg';
import userIcon from '../src/assets/icons/user.svg';
import cartIcon from '../src/assets/icons/cart.svg';


const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home">HOME</a>
          </li>
          <li className="nav-item">
            <a href="#gallery">GALLERY</a>
          </li>
          <li className="nav-item">
            <a href="#about">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#contact">CONTACT</a>
          </li>
          <li className="nav-item">
            <a href="#blog">BLOG</a>
          </li>
       
    </ul>
    <ul className="nav-menu">
    <li className="nav-item icons">
            <a href="#about">
              <img src={searchIcon} alt="About" />
            </a>
          </li>
          <li className="nav-item icons">
            <a href="#user">
              <img src={userIcon} alt="user" />
            </a>
          </li>
          <li className="nav-item icons">
            <a href="#cart">
              <img src={cartIcon} alt="cart" />
            </a>
          </li>

  </ul>
        </div>
      
      </nav>
    );
  };
  
  export default Navbar;