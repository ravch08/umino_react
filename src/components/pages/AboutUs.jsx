import React from 'react';
import { bannerAboutUs, PageBanner, AboutCompany, WhyChoose, GreenBanner, Clients } from '../utils/helper';

const AboutUs = () => {

   return (
      <main>
         <PageBanner
            imgSrc={bannerAboutUs}
            title='Our Perfect Store'
            superHeading='WELCOME TO UMINO'
            description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
         />
         <AboutCompany />
         <GreenBanner />
         <WhyChoose />
         <Clients />
      </main>
   )
}

export default AboutUs;