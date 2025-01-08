"use client";
// src/components/Navbar.tsx
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Construction", path: "/construction" },
    { name: "Design", path: "/design" },
    { name: "Projects", path: "/projects" },
    { name: "Management", path: "/management" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <nav className="fixed w-full flex justify-between items-center px-8 py-4 bg-black z-50">
      <div className="flex items-center">
        <Image
          src="/images/oneLogo.svg"
          alt="logo"
          width={50}
          height={50}
          className="mr-4"
        />
      </div>

      <button
        className="xl:hidden fixed top-4 right-4 z-50 text-white rounded-full"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
      </button>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } xl:flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 space-x-0 xl:space-x-8 ml-auto list-none m-0 p-0 xl:pl-12`}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer font-bold   ${
              pathname === item.path
                ? "text-red-500"
                : "text-white hover:text-red-500"
            }`}
          >
            <Link href={item.path} onClick={() => setMenuOpen(false)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
