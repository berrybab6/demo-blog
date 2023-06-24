
import React from 'react';  
import './Footer.css';
import './Navbar.css';
import twitter from '../src/assets/icons/twitter.svg';
import facebook from '../src/assets/icons/fb.svg';
import linkedin from '../src/assets/icons/ln.svg';
import youtube from '../src/assets/icons/yt.svg';




const Footer = () => {
    return (
        <footer className="footer">

<section className="content-section">
   
   <div className='content-container '>
     <h4 className='footer-title'>Subscribe to our weekly newsletter</h4>
     <div className="footer-form">
     {/* <form> */}
              <input type="email" placeholder="Email" className='email'  />
              <button type="submit" className='submit'>Submit</button>
            {/* </form>    */}
     </div>
       </div>
   <div className='content-container'>
     <ul className="footer-menu">
     <h4 className='footer-title'>Reach Us</h4>

        <li className="footer-item ">
            <a href="#home">
              HOME
            </a>
          </li>
          <li className="footer-item">
            <a href="#gallery">
             GALLERY
            </a>
          </li>
          <li className="footer-item ">
            <a href="#aboutus">
             About Us
            </a>
          </li>
          <li className="footer-item">
            <a href="#contactus">
             Contact Us
            </a>
          </li>
          <li className="footer-item">
            <a href="#contactus">
             Blog
            </a>
          </li>
  </ul>
   </div>

   <div className='content-container'>
     <ul className="footer-menu">
     <h4 className='footer-title'>Be Social</h4>

        <li className="footer-item socials">
            <ul className="nav-menu">
                <li className="nav-item">
                <a href="https://www.facebook.com"><img src={facebook} alt="Facebook" /></a>
                 </li>   
                 <li className="nav-item">
                 <h4 className='footer-title'>Facebook</h4>
                    </li>   
                 
            </ul>
        

          </li>
          <li className="footer-item socials">
            <ul className="nav-menu">
                <li className="nav-item">   <a href="https://www.twitter.com">
                <img src={twitter} alt="Twitter" />
              </a> </li>
              <li className="nav-item">
              <h4 className='footer-title'>Twitter</h4>

              </li>
            </ul>
            
          </li>
          <li className="footer-item socials">
            <ul className="nav-menu">
        <li className="nav-item">
        <a href="https://www.linkedin.com">
                <img src={linkedin} alt="LinkedIn" />
              </a>
        </li>
        <li className="nav-item">
        <h4 className='footer-title'>LinkedIn</h4>

        </li>
            </ul>
         

          </li>
          <li className="footer-item socials">
            <ul className="nav-menu ">
                <li className="nav-item"> <a href="https://www.youtube.com">
                <img src={youtube} alt="Youtube" />
              </a></li>
                <li className="nav-item">
                <h4 className='footer-title'>Youtube</h4>

                </li>
            </ul>
         
             
          </li>
         
  </ul>
   </div>
  
   <div className='content-container'>
     <ul className="footer-menu">
     <h4 className='footer-title'>Quick Links</h4>

        <li className="footer-item ">
            <a href="#1">
              Link1
            </a>
          </li>
          <li className="footer-item">
            <a href="#2">
             Link2
            </a>
          </li>
          <li className="footer-item ">
            <a href="#3">
             Link3
            </a>
          </li>
        
  </ul>
   </div>
  
 </section>
 
        <div className="footer-bottom">
          <p>&copy; 2023 Your Website. All rights reserved.</p>
        </div>
        </footer>
        
    );
  };
  
  export default Footer;