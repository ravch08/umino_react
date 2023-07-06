import React from 'react'
import { Location } from "../utils/helper";
import { Stack, Typography } from '@mui/material';

import { contactAddressItems } from "../utils/data";

const Contact = () => {
   return (
      <main>
         <Location />
         <section className="contactInfo" aria-labelledby='Contact Information'>
            <div className="container">
               <div className="section-heading">
                  <h2>Here to Help</h2>
                  <p>Have a question? You may find an answer in our FAQs. But you can also contact us:</p>
               </div>

               <Stack
                  gap={'2rem'}
                  flexWrap={'wrap'}
                  alignItems={'start'}
                  justifyContent={'space-between'}
                  direction={{ xs: 'column', md: 'row' }}
               >
                  {contactAddressItems?.map(item => {
                     return (
                        <div className="address-item" key={item.id}>
                           <Typography variant='h4' component={'h2'}>{item.branch}</Typography>
                           <p>{item.address}</p>
                           <a href={`tel:+${item.tel}`}>{item.tel}</a>
                           <p><span>Opening Hours:</span> {item.hours}</p>
                        </div>
                     )
                  })}
               </Stack>
            </div>
         </section>

         <section className="contactForm">
            <div className="container">
               <div className="section-heading">
                  <h2>Get in Touch</h2>
                  <p>We'd love to hear from you about our entire service. Your comments and suggestions will be highly appreciated. Please complete the form below.</p>
               </div>

               <form method="post" className="contact-form">
                  <Stack direction={{ xs: 'column', md: 'row' }}>
                     <input type="text" className="form-input" name="contact[name]" placeholder="Name" />
                     <input type="email" className="form-input" name="contact[email]" required placeholder="Email" />
                  </Stack>

                  <textarea name="contact[body]" className="form-input-text" rows="8" placeholder="Comment"></textarea>

                  <input type="submit" className="btn btn-dark" value="Send Message" />
               </form>
            </div>
         </section >

      </main >
   )
}

export default Contact