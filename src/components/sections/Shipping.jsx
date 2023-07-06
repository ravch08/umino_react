import React from 'react';
import { Stack } from '@mui/material';

import { shippingItems } from '../utils/data';

const Shipping = () => {

   return (
      <section className="shipping">
         <div className="container">
            <Stack
               className='shipping-wrapper'
               direction={{ xs: 'column', md: 'row' }}
               justifyContent={'space-between'}
               alignItems={'center'}
               gap={'4rem'}
            >
               {shippingItems?.map(item => {
                  return (
                     <div className="shipping-item" key={item.id}>
                        <img src={item.imgSrc} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                     </div>
                  )
               })}
            </Stack>
         </div>
      </section>
   )
}

export default Shipping;