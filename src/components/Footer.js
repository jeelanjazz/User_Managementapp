import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 text-center fixed-bottom">
      <p className="mb-2">© 2024 <strong>UserApp</strong>. All rights reserved.</p>
      <p className="mb-0">Your go-to platform for amazing user experience!</p>
    </footer>
  );
};

export default Footer;
