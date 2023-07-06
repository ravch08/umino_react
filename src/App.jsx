import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, AboutUs, Cart, Category, Contact, Page404, ProductDetail, Wishlist, Login, Register, Header, Footer } from "./components/utils/helper";

const App = () => {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App;