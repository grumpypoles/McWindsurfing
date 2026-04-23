"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function NavDropDown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-primary-700"
        onClick={toggleDropdown}
      >
        <span className="pointer-events-none select-none text-primary-100">
          Equipment
        </span>
        <svg
          className={`w-3 h-3 pointer-events-none transition-transform ${
            dropdownOpen ? "rotate-180" : ""
          }`}
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

      {dropdownOpen && (
        <div
          className="absolute left-0 w-48 pb-2 rounded-b-lg bg-primary-700 text-primary-100"
          style={{ top: "calc(100% + 4px)", zIndex: 9999 }}
        >
          <Link href="/sails"  className="block px-6 py-2 hover:bg-primary-900" onClick={closeDropdown}>Sails</Link>
          <Link href="/boards" className="block px-6 py-2 hover:bg-primary-900" onClick={closeDropdown}>Boards</Link>
          <Link href="/masts"  className="block px-6 py-2 hover:bg-primary-900" onClick={closeDropdown}>Masts</Link>
          <Link href="/booms"  className="block px-6 py-2 hover:bg-primary-900" onClick={closeDropdown}>Booms</Link>
          <Link href="/sundry" className="block px-6 py-2 hover:bg-primary-900" onClick={closeDropdown}>Sundry</Link>
        </div>
      )}
    </div>
  );
}
