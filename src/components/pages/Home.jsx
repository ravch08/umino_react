import React from 'react';
import { Banner, SaleBanner, Shipping, Blog, NewArrivals, YouMightLike } from "../utils/helper";

const Home = () => {
   return (
      <main>
         <Banner />
         <YouMightLike />
         <NewArrivals />
         <SaleBanner />
         <Shipping />
         <Blog />
      </main>
   )
}

export default Home;