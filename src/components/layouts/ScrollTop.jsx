import React, { useState, useEffect } from 'react';

const ScrollTop = () => {

   const [isScroll, setIsScroll] = useState(false);

   const scroller = () => {
      const scrollClass = window.scrollY > 200 ? 'show' : '';
      setIsScroll(scrollClass);
   }

   useEffect(() => {
      window.addEventListener('scroll', scroller);
      return () => window.removeEventListener('scroll', scroller);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   };

   const scroll_top = `${isScroll}` ? `${isScroll} scrollToTop` : 'scrollToTop';

   return (
      <div className={scroll_top} onClick={scrollToTop}>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>ic_keyboard_arrow_up_24px</title>
            <g className="nc-icon-wrapper">
               <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
            </g>
         </svg>
      </div>
   )
}

export default ScrollTop;