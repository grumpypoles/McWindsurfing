"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";


export default function NavDropDown() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="text-xl text-primary-100">
      <div className="container items-center gap-6 px-4 mx-auto md:flex">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          {/* <Link href="/" className="flex-1 px-2 py-5 font-bold text-white">
            Webcrunch.com
          </Link> */}

          {/* Mobile menu icon */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop menu */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu`}
        >
          {/* <Link href="/" className="block px-3 py-2">
            Home
          </Link> */}
          

          {/* Dropdown menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 rounded dropdown-toggle hover:bg-primary-700"
              onClick={toggleDropdown}
            >
              <span className="pointer-events-none select-none">Equipment</span>
              <svg
                className="w-3 h-3 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              className={`${
                dropdownOpen ? "block" : "hidden"
              } dropdown-menu absolute bg-primary-700 text-primary-100 rounded-b-lg pb-2 w-48`}
            >
              <Link
                href="/sails"
                className="block px-6 py-2 hover:bg-primary-900"
                onClick={closeDropdown}
              >
                Sails
              </Link>
              <Link
                href="/boards"
                className="block px-6 py-2 hover:bg-primary-900"
                onClick={closeDropdown}
              >
                Boards
              </Link>
              <Link
                href="/masts"
                className="block px-6 py-2 hover:bg-primary-900"
                onClick={closeDropdown}
              >
                Masts
              </Link>
              <Link
                href="/booms"
                className="block px-6 py-2 hover:bg-primary-900"
                onClick={closeDropdown}
              >
                Booms
              </Link>
              {/* <Link
                href="/services/seo"
                className="block px-6 py-2 hover:bg-primary-900"
              >
                SEO
              </Link> */}
            </div>
          </div>
          {/* <Link href="/about" className="block px-3 py-2">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2">
            Contact
          </Link> */}
        </div>
       
      </div>
    </nav>
  );
}
