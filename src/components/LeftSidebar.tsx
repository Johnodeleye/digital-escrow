import React from 'react';
import { 
  Home, 
  Shield, 
  CreditCard, 
  Settings, 
  ScanFace, 
  Sun, 
  Moon, 
  LogOut 
} from 'lucide-react';

interface LeftSidebarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ darkMode, toggleDarkMode }) => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Shield, label: 'Escrow', active: false },
    { icon: CreditCard, label: 'Transaction', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 h-screen bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-center">
        <img src="/logo.png" alt="Midoman" className="h-12 w-auto" />
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4 flex flex-col justify-between ">
        <div>
          <nav className="space-y-2 mt-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center px-4 py-5 rounded-xl transition-colors cursor-pointer ${
                  item.active 
                    ? 'bg-[#0660D3] text-white ' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <item.icon size={24} className="mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </nav>

          {/* New Features */}
          <div className="mt-20 bg-[#F8F8F8] dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
            <ScanFace size={32} className="text-gray-600 dark:text-gray-300 mb-2" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">New Features</span>
          </div>
        </div>

        {/* Bottom Section - Theme Toggle and Logout */}
        <div className="space-y-4 mt-8">

          {/* Theme Toggle */}
          <div className="bg-[#F8F8F8] dark:bg-gray-800 rounded-lg p-3 flex items-center justify-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${!darkMode ? 'bg-blue-100 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
              aria-label="Light mode"
            >
              <Sun size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${darkMode ? 'bg-blue-100 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
              aria-label="Dark mode"
            >
              <Moon size={20} />
            </button>
          </div>

          {/* Logout Button  */}
          <button className="w-full flex items-center justify-center px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
            <LogOut size={20} className="mr-2" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;