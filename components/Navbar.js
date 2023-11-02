import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full mx-auto text-white mt-10">
      <ul className="flex flex-row justify-around align-center items-center">
        <li>
          <a href="#" className="relative text-xl block w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="relative text-xl block w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
            About
          </a>
        </li>
        <Link href="/">
            <div className="flex items-center justify-center shadow p-2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-neutral-100 to-neutral-300 items-center rounded-full">
              <Image
                src="/assets/images/fg_logo_name.png"
                alt="foliage green logo"
                width={120}
                height={120}
                className="object-contain" 
              />
            </div>
        </Link>
        <li>
          <a href="#" className="relative text-xl block w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="relative text-xl block w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
