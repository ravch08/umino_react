import React from 'react';
import { Stack } from '@mui/material';
import { categoryItems } from '../utils/data';

const YouMightLike = () => {

   return (
      <section className="you-might-like">
         <div className="container">
            <div className="section-heading">
               <h2>You Might Like</h2>
               <p>Our products are designed for everyone, environmentally friendly.</p>
            </div>

            <Stack direction={{ xs: 'column', sm: 'row' }} flexWrap={{ xs: 'wrap', lg: 'initial' }} gap={'2rem'} justifyContent={'space-between'} alignItems={'center'}>
               {categoryItems?.map(item => {
                  return (
                     <div className="category-item" key={item.id}>
                        <figure><img src={item.imgSrc} alt={item.title} /></figure>
                        <a href="#!" className='title'>{item.title}</a>
                     </div>
                  )
               })}
            </Stack>

         </div>
      </section >
   )
}

export default YouMightLike;