import React,{lazy,Suspense} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import Footer from './components/Footer';
import Testimonials from './components/especialties';
const WhatsAppButton = lazy(() => import('./components/whatsappbtn'));
import Especialties from './components/especialties';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-lightGray">
      <Navbar />
      <Hero />
      <WhyUs />
      <ContactForm />
      <Services />
      <Especialties />
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}

export default App;