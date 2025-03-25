"use client";

import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  Book,
  Layers,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex">
      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden p-3 fixed top-4 left-4 bg-gray-800 text-white rounded-full z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-100 text-black w-64 min-h-screen p-5 fixed md:relative transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <nav className="space-y-4">
          <SidebarItem
            href="/dashboard"
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            href="/students"
            icon={<Users size={20} />}
            text="Students"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            href="/instructors"
            icon={<Users size={20} />}
            text="Instructors"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            href="/courses"
            icon={<Book size={20} />}
            text="Courses"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            href="/batches"
            icon={<Layers size={20} />}
            text="Batches"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <SidebarItem
            href="/transactions"
            icon={<CreditCard size={20} />}
            text="Transactions"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

const SidebarItem = ({ href, icon, text, activeTab, setActiveTab }) => {
  return (
    <div>
    <Link
      href={href}
      className={`flex items-center space-x-3 p-3 rounded-md hover:bg-gradient-to-r from-purple-500 to-cyan-400 transition ${
        activeTab === text ? "border-b-2 border-[#7e3af2]" : ""
      }`}
      onClick={() => setActiveTab(text)}
    >
      {icon}
      <span>{text}</span>
    </Link>
    

  

    
    </div>
  );
};

export default Sidebar;
