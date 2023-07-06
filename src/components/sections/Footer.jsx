import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logoLight, SocialIcons, ScrollTop } from '../utils/helper';

const Footer = () => {

   return (
      <footer>
         <div className="container">
            <Stack
               flexWrap={'wrap'}
               alignItems={'flex-start'}
               gap={{ xs: '5rem', md: '0' }}
               justifyContent={'space-between'}
               direction={{ xs: 'column', md: 'row' }}
            >
               <div className="footer-item">
                  <Link to="/"><img src={logoLight} width='120px' alt="umino" /></Link>
                  <span className="address">268 St, South New York/NY 98944, <br /> United States.</span>
                  <a href="tel:+222-1800-2628">+222-1800-2628</a>
                  <a href="mailto:blueskytechcompany@gmail.com">blueskytechcompany@gmail.com</a>
                  <SocialIcons />
               </div>

               <div className="footer-list">
                  <span>HOT CATEGORIES</span>
                  <ul className="ftr-list">
                     <li className="ftr-item"><a href="#!" className="ftr-link">Special Offer</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Performance</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">T-Shirts</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Underwear</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Top Brands</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Online Exclusion</a></li>
                  </ul>
               </div>

               <div className="footer-list">
                  <span>CUSTOMER SERVICE</span>
                  <ul className="ftr-list">
                     <li className="ftr-item"><a href="#!" className="ftr-link">Privacy Policy</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Refund Policy</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Shipping & Return</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Terms & Condition</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Advanced Search</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Theme FAQs</a></li>
                     <li className="ftr-item"><a href="#!" className="ftr-link">Store Location</a></li>
                  </ul>
               </div>

               <div className="footer-list">
                  <span>SIGN UP TO NEWSLETTER</span>
                  <p>Enter your email address to get $10 off your first order and free shipping.Updates information on Sales and Offers.</p>

                  <form action="#">
                     <label htmlFor="email">Email Address</label>
                     <input type="email" name="email" placeholder='Enter your Email..' />
                     <button type="submit" className='btn btn-light'>SUBSCRIBE</button>
                  </form>
               </div>
            </Stack>
         </div>
         <ScrollTop />
      </footer>
   )
}

export default Footer;