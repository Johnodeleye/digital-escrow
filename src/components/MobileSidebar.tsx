import React from 'react';
import { 
  Home, 
  Shield, 
  CreditCard, 
  Settings, 
  ScanFace, 
  Sun, 
  Moon, 
  LogOut,
  X
} from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ 
  isOpen, 
  onClose, 
  darkMode, 
  toggleDarkMode 
}) => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Shield, label: 'Escrow', active: false },
    { icon: CreditCard, label: 'Transaction', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <img src="/logo.png" alt="Midoman" className="h-8 w-auto" />
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 flex flex-col justify-start overflow-y-auto">
          <div>
            <nav className="space-y-2 mt-4">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center px-4 py-3 rounded-xl transition-colors cursor-pointer ${
                    item.active 
                      ? 'bg-[#0660D3] text-white' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </nav>

            {/* New Features Section */}
            <div className="mt-8 bg-[#F8F8F8] dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <ScanFace size={28} className="text-gray-600 dark:text-gray-300 mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">New Features</span>
            </div>
          </div>

          {/* Bottom Section - Theme Toggle and Logout */}
          <div className="space-y-4 mt-14 pb-4">
            {/* Theme Toggle */}
            <div className="bg-[#F8F8F8] dark:bg-gray-800 rounded-lg p-3 flex items-center justify-center space-x-6">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${!darkMode ? 'bg-blue-100 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
                aria-label="Light mode"
              >
                <Sun size={18} />
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-blue-100 text-blue-600' : 'text-gray-600 dark:text-gray-300'}`}
                aria-label="Dark mode"
              >
                <Moon size={18} />
              </button>
            </div>

            {/* Logout Button */}
            <button className="w-full flex items-center justify-center px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
              <LogOut size={18} className="mr-2" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;