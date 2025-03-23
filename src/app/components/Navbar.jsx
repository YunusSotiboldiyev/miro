'use client';
import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import Link from 'next/link';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-400 ">
      <div className="text-2xl font-bold text-gray-800">miro</div>

      <ul className="hidden md:flex space-x-6 text-gray-600">
        {['Product', 'Solutions', 'Resources'].map((menu) => (
          <li key={menu} className="relative">
            <button
              className="flex items-center space-x-1 hover:text-black"
              onClick={() => toggleDropdown(menu)}
            >
              <span>{menu}</span>
              <IoMdArrowDropdown />
            </button>
            {dropdown === menu && (
              <div className="absolute top-full left-0 bg-white shadow-lg p-2 w-40">
                <a className="block p-2 hover:bg-gray-100">Option 1</a>
                <a className="block p-2 hover:bg-gray-100">Option 2</a>
              </div>
            )}
          </li>
        ))}
        <li className="hover:text-black"><a href="#">Enterprise</a></li>
        <li className="hover:text-black"><a href="#">Pricing</a></li>
      </ul>

      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-gray-600 hover:text-black">
          <FaGlobe />
          <span>EN</span>
        </button>
        <a href="#" className="text-gray-600 hover:text-black">Contact Sales</a>
        <a href="#" className="text-gray-600 hover:text-black">Login</a>
        <Link href="#">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Sign up free →
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
