import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-white w-full mx-auto">
      <ul className="flex flex-row justify-around p-2 align-center items-center">
        <li><a href="#" className="text-xl hover:underline">Home</a></li>
        <li><a href="#" className="text-xl hover:underline">About</a></li>
        <Link href="/" className="flex gap-2 flex-center p-2">
            <Image
              src="/assets/images/fg_logo.png"
              alt="foliage green logo"
              width={90}
              height={90}
              className="object-contain" 
            />
        </Link>
        <li><a href="#" className="text-xl hover:underline">Services</a></li>
        <li><a href="#" className="text-xl hover:underline">Contact</a></li>
      </ul>
    </div>
  )
};

export default Navbar
