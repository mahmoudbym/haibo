import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/Header.jsx';
import Home from './components/home.jsx';
import Info from './components/Info.jsx';
import Footer from './components/Footer.jsx';
import Aboutus from './components/Aboutus.jsx';
import Shop from './components/Shop.jsx';
import Animation from './components/Animation.jsx';
import Cart from './components/cart.jsx';
import SignIn from './components/SignIn.jsx'; 
import SignUp from './components/signup.jsx'; 
import Dashboard from './components/Dashboard.jsx';
import Contact from './components/contact.jsx'

function Layout() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/home' && location.pathname !== '/Dashboard' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/info" element={<Info />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/contact" element={<Contact />} /> 

      </Routes>

      {location.pathname !== '/home' && location.pathname !== '/Dashboard' && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
