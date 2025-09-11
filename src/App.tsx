import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import RoleOfUnit from './components/RoleOfUnit';
import PaymentPolicy from './components/PaymentPolicy';
import ProductVariants from './components/ProductVariants';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <RoleOfUnit />
      <PaymentPolicy />
      <ProductVariants />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;