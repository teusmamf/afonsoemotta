import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import Footer from './components/Footer';
import Testimonials from './components/Clients';
import WhatsAppButton from './components/whatsappbtn';

function App() {
  return (
    <div className="min-h-screen bg-lightGray">
      <Navbar />
      <Hero />
      <WhyUs />
      <ContactForm />
      <Services />
      <Testimonials />
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}

export default App;