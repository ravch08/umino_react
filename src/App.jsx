import React, { useLayoutEffect } from "react";
import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';

import { Home, AboutUs, Cart, Category, Contact, Page404, ProductDetail, Wishlist, Login, Register, Header, Footer } from "./components/utils/helper";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() =>
    window.scrollTo({ top: 0, behavior: 'smooth' }), [location.pathname]);

  return children;
};

const App = () => {

  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="category:id" element={<Category />} />
          <Route path="product:id" element={<ProductDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  )
}

export default App;