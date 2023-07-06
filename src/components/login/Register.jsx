import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { PageBanner, bannerRegister } from "../utils/helper";

const Register = () => {

   return (
      <main>
         <PageBanner
            imgSrc={bannerRegister}
            title="Register"
            superHeading="WELCOME TO UMINO"
         />
         <section className="register">
            <div className="container">
               <div className="form">
                  <Typography variant="h3" component={'h2'} mb={'4rem'} textAlign={'center'}>Register</Typography>

                  <form action="#!">
                     <label htmlFor="form_firstName">First Name <span>*</span></label>
                     <input type="text" name="form_firstName" placeholder="First Name" />

                     <label htmlFor="form_password">Password <span>*</span></label>
                     <input type="text" name="form_lastName" placeholder="Last Name" />

                     <label htmlFor="form_email">Email <span>*</span></label>
                     <input type="email" name="form_email" placeholder="Your email*" />

                     <label htmlFor="form_password">Password <span>*</span></label>
                     <input type="password" name="form_password" placeholder="Password*" />

                     <p>Your personal data will be used to support your experience throughout this website, to manage access to your account and for other purposes described in our privacy policy.
                     </p>

                     <Link to="#!" type="submit" className="btn btn-dark">CREATE ACCOUNT</Link>
                     <Link to="/login" className='btn btn-light'>LOG IN</Link>
                  </form>
               </div>
            </div>
         </section>
      </main >
   )
}

export default Register;