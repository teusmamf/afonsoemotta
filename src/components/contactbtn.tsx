import React from 'react';
import '../index.css'; // Import the CSS file



const ContactBtn = () => {
  const phoneNumber = "+5545988280716";
  const message = "Olá ! Procuro um contador, gostaria de mais informações!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappUrl} className="btn_contact_container" target="_blank" rel="noopener noreferrer">
      <button className="btn_contact">
        Fale com um especialista !
      </button>
    </a>
  );
};

export default ContactBtn;