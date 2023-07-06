import React, { useState } from 'react';
import { Stack } from '@mui/material';

import { productItems } from '../utils/data'
import ProductCard from '../layouts/ProductCard'

const NewArrivals = () => {

   const [isCategory, setIsCategory] = useState('All');

   const getCategory = (e) => {
      const tabCategory = e.target.dataset.category;
      setIsCategory(tabCategory);
   }

   const categoryFilteredItems = productItems.filter(item => item.category.includes(isCategory));

   return (
      <section className="newArrivals">
         <div className="container">

            <div className="section-heading">
               <h2>New Arrivals</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur, velit dolorem harum cupiditate unde cum dolore deleniti? Quis, quas!</p>
            </div>

            <Stack
               mb={'4rem'}
               className="product-tabs"
               direction={'row'} gap={'1rem'}
               justifyContent={'center'}
               alignItems={'center'}
            >
               <button className="tab-item active" onClick={getCategory} data-category="All">ALL</button>
               <button className="tab-item" onClick={getCategory} data-category="Lighting">LIGHTING</button>
               <button className="tab-item" onClick={getCategory} data-category="Bedroom">BEDROOM</button>
               <button className="tab-item" onClick={getCategory} data-category="Bathroom">BATHROOM</button>
               <button className="tab-item" onClick={getCategory} data-category="Sofa">SOFA</button>
               <button className="tab-item" onClick={getCategory} data-category="Outdoor">OUTDOOR</button>
               <button className="tab-item" onClick={getCategory} data-category="Home Kitchen">HOME KITCHEN</button>
            </Stack>

            <Stack
               alignItems={'center'}
               justifyContent={"center"}
               className='product-wrapper'
               gap={"2rem"} flexWrap={'wrap'}
               direction={{ xs: 'column', md: 'row' }}
            >
               {(isCategory === "All" ? productItems : categoryFilteredItems)?.map(item => {
                  return (<ProductCard
                     key={item.id}
                     stars={item.stars}
                     price={item.price}
                     title={item.title}
                     imgSrc1={item.imgSrc1}
                     imgSrc11={item.imgSrc11}
                     priceCrossed={item.priceCrossed}
                  />)
               })}
            </Stack>
         </div>
      </section>
   )
}

export default NewArrivals;