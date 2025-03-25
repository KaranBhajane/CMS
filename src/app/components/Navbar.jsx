"use client";

import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-gray-100 text-gray-900 p-4 flex items-center justify-between shadow-md  z-50">
      {/* CMS Logo */}
      <div className="text-3xl font-bold tracking-wide text-[#7e3af2] ml-15 ">CMS</div>

      {/* Profile Section */}
      <div className="relative" ref={profileRef}>
        <button
          className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-full transition"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300">
            <User size={24} className="text-gray-700" />
          </div>
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white text-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <button className="block w-full px-4 py-2 hover:bg-gray-100 transition">Login</button>
            <button className="block w-full px-4 py-2 hover:bg-gray-100 transition">Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;