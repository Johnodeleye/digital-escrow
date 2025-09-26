import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex h-24 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 items-center justify-between px-6">
      
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Home</h1>
        
        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
          </div>

          {/* Bell */}
          <div className="relative">
            <Bell size={28} className="text-gray-600 dark:text-gray-300" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Mobile Header - Fixed  */}
      <header className="md:hidden h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-40">
        {/* Menu Icon */}
        <button onClick={toggleSidebar}>
          <Menu size={24} className="text-gray-600 dark:text-gray-300" />
        </button>
        
        {/* Logo in the middle */}
        <img src="/logo.png" alt="Midoman" className="h-8 w-auto" />
        
        {/* Notification Bell */}
        <div className="relative">
          <Bell size={24} className="text-gray-600 dark:text-gray-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>
      </header>
    </>
  );
};

export default Header;