import React from 'react'

// components/Footer.js

function Footer() {
    return (
      <footer className="bg-neutral-800 text-white py-10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-medium mb-2">The Foliage Green</h2>
            <p>Mount Street, Mullingar</p>
            <p>Email: flowers@thefoliagegreen.com</p>
            <p>Phone: 044 9345637</p>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
