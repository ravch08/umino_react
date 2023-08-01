import React from 'react';
import { Clients, PageBanner, bannerShop } from '../utils/helper';

const Shop = () => {

  return (
    <main>
      <PageBanner
        title='Our Shop'
        imgSrc={bannerShop}
        superHeading='WELCOME TO UMINO'
        description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
      />
      <Clients />
    </main>
  )
}

export default Shop;