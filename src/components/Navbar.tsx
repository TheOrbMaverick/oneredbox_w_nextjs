// src/components/Navbar.tsx
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-300 ">
      <ul className="flex space-x-8 list-none m-0 p-0">
        <li className="cursor-pointer font-bold text-gray-800 hover:text-red-500">Home</li>
        <li className="cursor-pointer font-bold text-gray-800 hover:text-red-500">Construction</li>
        <li className="cursor-pointer font-bold text-gray-800 hover:text-red-500">Design</li>
        <li className="cursor-pointer font-bold text-gray-800 hover:text-red-500">Project</li>
        <li className="cursor-pointer font-bold text-gray-800 hover:text-red-500">Management</li>
      </ul>
    </nav>
  );
};

