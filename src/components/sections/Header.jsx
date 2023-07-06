import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { logoDark } from '../utils/helper';

const Header = () => {

   const [isSticky, setIsSticky] = useState("");

   const stickier = () => {
      const stickyClass = window.scrollY > 100 ? 'sticky' : '';
      setIsSticky(stickyClass);
   }

   useEffect(() => {
      window.addEventListener('scroll', stickier);
      return () => window.removeEventListener('scroll', stickier);
   }, []);

   return (
      <header className={isSticky}>
         <div className="container-fluid">
            <div className="header-wrapper">
               <Link to="/" className="nav-brand"><img src={logoDark} width="90" alt="umino" /></Link>

               <nav>
                  <ul className="nav-list">
                     <li className="nav-item"><Link to="/" className="nav-link">HOME</Link></li>
                     <li className="nav-item"><Link to="aboutus" className="nav-link">ABOUT US</Link></li>
                     <li className="nav-item"><Link to="#!" className="nav-link">PRODUCTS</Link></li>
                     <li className="nav-item"><Link to="#!" className="nav-link">BLOG</Link></li>
                     <li className="nav-item"><Link to="contact" className="nav-link">CONTACT</Link></li>
                  </ul>
               </nav>

               <div className="user-info">
                  <Link to="#!" className='user-link search'>
                     <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9 11.731C11.8 11.731 11.8 11.731 11.9 11.731C11.8 11.8304 11.8 11.8304 11.8 11.8304C11.3 12.3275 10.7 12.7251 9.9 13.0234C9.2 13.3216 8.4 13.4211 7.6 13.4211C6.8 13.4211 6 13.2222 5.3 12.924C4.6 12.6257 4 12.2281 3.4 11.6316C2.9 11.1345 2.4 10.4386 2.1 9.74269C1.8 9.1462 1.7 8.45029 1.7 7.65497C1.7 6.85965 1.9 6.06433 2.2 5.36842C2.5 4.5731 2.9 3.97661 3.4 3.38012C4 2.88304 4.6 2.48538 5.3 2.18713C6 1.88889 6.8 1.69006 7.6 1.69006C8.4 1.69006 9.2 1.88889 9.9 2.18713C10.6 2.48538 11.3 2.88304 11.8 3.47953C12.3 3.97661 12.7 4.67251 13.1 5.36842C13.4 6.06433 13.6 6.76023 13.6 7.65497C13.6 8.45029 13.4 9.24561 13.1 9.94152C12.8 10.538 12.4 11.1345 11.9 11.731ZM16.7 15.4094L13.6 12.3275C14.1 11.6316 14.5 10.9357 14.8 10.1404C15.1 9.34503 15.2 8.45029 15.2 7.55556C15.2 6.46199 15 5.46784 14.6 4.5731C14.2 3.67836 13.7 2.88304 13 2.18713C12.3 1.49123 11.5 0.994152 10.6 0.596491C9.7 0.19883 8.7 0 7.6 0C6.6 0 5.6 0.19883 4.6 0.596491C3.7 0.994152 2.9 1.49123 2.2 2.18713C1.5 2.88304 1 3.67836 0.6 4.67251C0.2 5.56725 0 6.5614 0 7.65497C0 8.64912 0.2 9.64327 0.6 10.6374C1 11.5322 1.6 12.3275 2.3 13.0234C3 13.7193 3.8 14.2164 4.7 14.7134C5.6 15.0117 6.6 15.2105 7.6 15.2105C8.5 15.2105 9.4 15.1111 10.2 14.8129C11 14.5146 11.8 14.117 12.4 13.6199L15.5 16.7018C15.7 16.9006 15.9 17 16.1 17C16.3 17 16.5 16.9006 16.7 16.7018C16.9 16.5029 17 16.3041 17 16.1053C17 15.807 16.9 15.6082 16.7 15.4094Z"></path>
                     </svg>
                  </Link>
                  <Link to="#!" className='user-link user'>
                     <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.8927 15.7682C16.0329 14.3137 14.8061 13.1078 13.3338 12.27C11.8614 11.4322 10.1946 10.9914 8.49845 10.9914C6.80225 10.9914 5.13546 11.4322 3.66314 12.27C2.19082 13.1078 0.964024 14.3137 0.104236 15.7682C-0.00102398 15.9568 -0.027822 16.179 0.0295835 16.387C0.0566587 16.493 0.106188 16.592 0.174854 16.6774C0.243521 16.7627 0.329737 16.8325 0.427728 16.8821C0.554141 16.9534 0.697158 16.9903 0.842462 16.9894C0.986554 16.9954 1.12952 16.9616 1.25545 16.8917C1.38138 16.8218 1.48536 16.7185 1.5558 16.5933C2.26752 15.3886 3.2833 14.3898 4.50251 13.6958C5.72172 13.0018 7.10204 12.6367 8.50674 12.6367C9.91144 12.6367 11.2918 13.0018 12.511 13.6958C13.7302 14.3898 14.746 15.3886 15.4577 16.5933C15.5685 16.7806 15.7491 16.9169 15.9603 16.9725C16.1715 17.0281 16.3963 16.9986 16.5858 16.8903C16.6801 16.8403 16.7628 16.7711 16.8285 16.6872C16.8943 16.6034 16.9415 16.5067 16.9673 16.4035C16.998 16.298 17.0072 16.1874 16.9944 16.0783C16.9816 15.9692 16.947 15.8638 16.8927 15.7682Z"></path>
                        <path d="M8.49966 10.2C9.83622 10.2002 11.1195 9.67091 12.0732 8.72594C13.027 7.78097 13.5752 6.49588 13.5997 5.14718C13.5997 3.78206 13.0623 2.47286 12.1059 1.50757C11.1495 0.542291 9.85226 0 8.49966 0C7.14705 0 5.84985 0.542291 4.89341 1.50757C3.93698 2.47286 3.39966 3.78206 3.39966 5.14718C3.42416 6.49588 3.97228 7.78097 4.92607 8.72594C5.87987 9.67091 7.1631 10.2002 8.49966 10.2ZM5.09966 5.14718C5.09966 4.2371 5.45787 3.3643 6.09549 2.72078C6.73312 2.07725 7.59792 1.71573 8.49966 1.71573C9.40139 1.71573 10.2662 2.07725 10.9038 2.72078C11.5414 3.3643 11.8997 4.2371 11.8997 5.14718C11.8997 6.05726 11.5414 6.93006 10.9038 7.57359C10.2662 8.21711 9.40139 8.57864 8.49966 8.57864C7.59792 8.57864 6.73312 8.21711 6.09549 7.57359C5.45787 6.93006 5.09966 6.05726 5.09966 5.14718Z"></path>
                     </svg>
                  </Link>
                  <Link to="#!" className='user-link wishlist'>
                     <svg width="21" height="17" viewBox="0 0 14 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7441 2.26562C11.9993 2.52083 12.1908 2.8125 12.3184 3.14062C12.446 3.45964 12.5098 3.78776 12.5098 4.125C12.5098 4.46224 12.446 4.79492 12.3184 5.12305C12.1908 5.44206 11.9993 5.72917 11.7441 5.98438L7 10.7285L2.25586 5.98438C2.00065 5.72917 1.80924 5.44206 1.68164 5.12305C1.55404 4.79492 1.49023 4.46224 1.49023 4.125C1.49023 3.78776 1.55404 3.45964 1.68164 3.14062C1.80924 2.8125 2.00065 2.52083 2.25586 2.26562C2.51107 2.01042 2.79818 1.81901 3.11719 1.69141C3.44531 1.5638 3.77799 1.5 4.11523 1.5C4.45247 1.5 4.7806 1.5638 5.09961 1.69141C5.41862 1.81901 5.71029 2.01042 5.97461 2.26562L6.58984 2.88086C6.69922 2.99935 6.83594 3.05859 7 3.05859C7.16406 3.05859 7.30078 2.99935 7.41016 2.88086L8.02539 2.26562C8.28971 2.01042 8.58138 1.81901 8.90039 1.69141C9.2194 1.5638 9.54753 1.5 9.88477 1.5C10.222 1.5 10.5501 1.5638 10.8691 1.69141C11.1973 1.81901 11.4889 2.01042 11.7441 2.26562ZM12.5645 1.44531C12.1999 1.07161 11.7806 0.79362 11.3066 0.611328C10.8418 0.429036 10.3678 0.337891 9.88477 0.337891C9.40169 0.337891 8.92773 0.429036 8.46289 0.611328C7.99805 0.79362 7.57878 1.07161 7.20508 1.44531L7 1.65039L6.79492 1.44531C6.42122 1.07161 6.00195 0.79362 5.53711 0.611328C5.07227 0.429036 4.59831 0.337891 4.11523 0.337891C3.63216 0.337891 3.15365 0.429036 2.67969 0.611328C2.21484 0.79362 1.80013 1.07161 1.43555 1.44531C1.06185 1.8099 0.779297 2.22917 0.587891 2.70312C0.405599 3.16797 0.314453 3.64193 0.314453 4.125C0.314453 4.60807 0.405599 5.08659 0.587891 5.56055C0.779297 6.02539 1.06185 6.4401 1.43555 6.80469L6.58984 11.959C6.69922 12.0775 6.83594 12.1367 7 12.1367C7.16406 12.1367 7.30078 12.0775 7.41016 11.959L12.5645 6.80469C12.9382 6.4401 13.2161 6.02539 13.3984 5.56055C13.5898 5.08659 13.6855 4.60807 13.6855 4.125C13.6855 3.64193 13.5898 3.16797 13.3984 2.70312C13.2161 2.23828 12.9382 1.81901 12.5645 1.44531Z"></path>
                     </svg>
                     <div className="badge">0</div>
                  </Link>
                  <Link to="#!" className='user-link cart'>
                     <svg width="21" height="17" viewBox="0 0 21 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3699 15.3407C14.1509 15.3407 13.941 15.2535 13.7862 15.0982C13.6314 14.943 13.5444 14.7324 13.5444 14.5128H11.8936C11.8936 15.1715 12.1545 15.8032 12.6189 16.269C13.0832 16.7347 13.7131 16.9964 14.3699 16.9964C15.0266 16.9964 15.6565 16.7347 16.1209 16.269C16.5853 15.8032 16.8462 15.1715 16.8462 14.5128H15.1953C15.1953 14.7324 15.1083 14.943 14.9535 15.0982C14.7987 15.2535 14.5888 15.3407 14.3699 15.3407Z"></path>
                        <path d="M8.5612 15.3407C8.34228 15.3407 8.13233 15.2535 7.97753 15.0982C7.82273 14.943 7.73576 14.7324 7.73576 14.5128H6.07715C6.07715 14.8395 6.14129 15.1629 6.26592 15.4646C6.39055 15.7664 6.57322 16.0406 6.8035 16.2715C7.03378 16.5025 7.30717 16.6857 7.60805 16.8107C7.90893 16.9357 8.23141 17 8.55707 17C8.88274 17 9.20522 16.9357 9.5061 16.8107C9.80698 16.6857 10.0804 16.5025 10.3106 16.2715C10.5409 16.0406 10.7236 15.7664 10.8482 15.4646C10.9729 15.1629 11.037 14.8395 11.037 14.5128H9.38612C9.38612 14.7323 9.29923 14.9428 9.14454 15.098C8.98985 15.2533 8.78003 15.3406 8.5612 15.3407Z"></path>
                        <path d="M19.3299 1.64401C19.2849 1.63633 19.2393 1.63252 19.1937 1.63263H5.9867C5.76778 1.63263 5.55782 1.71985 5.40302 1.8751C5.24823 2.03035 5.16126 2.24092 5.16126 2.46047C5.16126 2.68003 5.24823 2.8906 5.40302 3.04585C5.55782 3.2011 5.76778 3.28832 5.9867 3.28832H18.2192L18.001 4.60149L16.8438 11.5668H6.07595L3.26946 4.60149L1.59537 0.482961C1.50684 0.289212 1.34721 0.13717 1.14972 0.0584856C0.952225 -0.020199 0.732083 -0.0194636 0.535118 0.0605389C0.338153 0.140541 0.179541 0.293646 0.0922992 0.487983C0.00505767 0.682319 -0.00409102 0.902913 0.0667575 1.10384L2.73963 7.68158L4.56385 12.5307C4.6985 12.9389 4.97657 13.2224 5.37794 13.2224H17.5428C17.7383 13.2225 17.9275 13.1531 18.0766 13.0264C18.2258 12.8997 18.3253 12.724 18.3574 12.5307L19.675 4.60149L20.0083 2.59655C20.0443 2.38002 19.993 2.15803 19.8658 1.9794C19.7386 1.80077 19.5458 1.68013 19.3299 1.64401Z"></path>
                     </svg>
                     <div className="badge">0</div>
                  </Link>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header;