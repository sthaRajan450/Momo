import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import AllergyAdvice from "./pages/AllergyAdvice";
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import ProductDescription from "./pages/ProductDescription";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/allergyAdvice" element={<AllergyAdvice />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/productDescription" element={<ProductDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
