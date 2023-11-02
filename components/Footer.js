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
            <li><a href="#" className="relative text-xl block w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Privacy Policy</a></li>
            <li><a href="#" className="relative text-xl block w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Terms of Service</a></li>
            <li><a href="#" className="relative text-xl block w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">Contact</a></li>
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  
