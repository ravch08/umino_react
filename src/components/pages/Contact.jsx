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
                        <Stack direction={'column'} className="address-item" key={item.id}>
                           <Typography variant='h4' mb={'2rem'} component={'h2'}>{item.branch}</Typography>
                           <p>{item.address}</p>
                           <a href={`tel:+${item.tel}`} className='address-phone'>Tel: {item.tel}</a>
                           <p><span>Opening Hours:</span> {item.hours}</p>
                        </Stack>
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

               <div className="form">
                  <form method="post" className="contact-form">
                     <Stack direction={{ xs: 'column', md: 'row' }} gap={'2rem'} alignItems={'center'}>
                        <label htmlFor="form_Name">First Name <span>*</span></label>
                        <input type="text" name="form_Name" placeholder="Name" required />

                        <label htmlFor="form_email">Email <span>*</span></label>
                        <input type="email" name="form_email" placeholder="Your email*" required />
                     </Stack>

                     <textarea name="contactText" rows="8" placeholder="Comment"></textarea>

                     <input type="submit" className="btn btn-dark" value="SEND MESSAGE" />
                  </form>
               </div>
            </div>
         </section >

      </main >
   )
}

export default Contact