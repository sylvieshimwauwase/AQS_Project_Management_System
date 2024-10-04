import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <footer className="flex justify-center items-center p-6 bg-gray-100">
      <p>&copy; {currentYear} Africa Quantitative Science. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
