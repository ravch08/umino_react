import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { PageBanner, bannerWishlist, ProductCard } from "../utils/helper";

import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../app/wishCartSlice';

const Wishlist = () => {

   const dispatch = useDispatch();
   const { wishCarts } = useSelector(state => state.wishCartState);

   return (
      <main>
         <PageBanner
            title='Wishlist'
            imgSrc={bannerWishlist}
            superHeading='WELCOME TO UMINO'
            description="Over 20 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect understand, connect."
         />

         <section className="wishlist" aria-labelledby='Wishlist'>
            <div className="container">
               <Stack
                  mb={'4rem'}
                  flexWrap={'wrap'}
                  className="wishlist-wrapper"
                  direction={'row'} gap={'1rem'}
                  justifyContent={'center'}
                  alignItems={'center'}
               >
                  {wishCarts.length === 0 ? <p>No products were added to the wishlist page. <Link to="/" className='btn-text'>Back to shopping</Link ></p> : wishCarts?.map(item => {
                     return (<ProductCard
                        key={item.id}
                        stars={item.stars}
                        price={item.price}
                        title={item.title}
                        imgSrc1={item.imgSrc1}
                        imgSrc11={item.imgSrc11}
                        priceCrossed={item.priceCrossed}
                     />)
                  }
                  )}

               </Stack>
            </div>
         </section>
      </main>
   )
}

export default Wishlist;