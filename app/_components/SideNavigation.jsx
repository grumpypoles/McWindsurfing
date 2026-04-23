"use client";

import {
  UserIcon,
  WrenchScrewdriverIcon,
  WrenchIcon,
  BoltIcon,
  GlobeAsiaAustraliaIcon,
  PlayCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "User profile",
    href: "/account/profile",
    icon: <UserIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Settings",
    href: "/account/admin",
    icon: <WrenchScrewdriverIcon className="w-5 h-5 text-primary-600" />,
    hasChildren: true,
  },
];

const navSubLinks = [
  {
    name: "Categories",
    href: "/account/admin/categories",
    icon: <WrenchIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Disciplines",
    href: "/account/admin/disciplines",
    icon: <WrenchIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Wind Power",
    href: "/account/admin/windpower",
    icon: <BoltIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Wind Directions",
    href: "/account/admin/winddirection",
    icon: <BoltIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Ocean Swell",
    href: "/account/admin/swell",
    icon: <WrenchIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Ocean Sports",
    href: "/account/admin/sports",
    icon: <PlayCircleIcon className="w-5 h-5 text-primary-600" />,
  },
  {
    name: "Ocean Locations",
    href: "/locations",
    icon: <GlobeAsiaAustraliaIcon className="w-5 h-5 text-primary-600" />,
  },
];

const linkClass = (active) =>
  `py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
    active ? "bg-primary-800" : ""
  }`;

const SideNavigation = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (name) =>
    setActiveMenu((prev) => (prev === name ? null : name));

  return (
    <ul className="flex flex-col h-full gap-2 text-lg">
      {navLinks.map((link) => (
        <li key={link.name}>
          <div className="flex items-center">
            <Link
              className={`flex-1 ${linkClass(pathname === link.href)}`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>

            {link.hasChildren && (
              <button
                type="button"
                onClick={() => toggleMenu(link.name)}
                className="px-3 py-3 transition-colors hover:bg-primary-900 text-primary-200"
                aria-label={`${activeMenu === link.name ? "Collapse" : "Expand"} ${link.name}`}
              >
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === link.name ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {link.hasChildren && activeMenu === link.name && (
            <ul className="pl-5">
              {navSubLinks.map((sub) => (
                <li key={sub.name}>
                  <Link
                    className={linkClass(pathname === sub.href)}
                    href={sub.href}
                  >
                    {sub.icon}
                    <span>{sub.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideNavigation;
