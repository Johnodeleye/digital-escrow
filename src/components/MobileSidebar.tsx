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
  darkMode: boolean;
  toggleDarkMode: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ 
  darkMode, 
  toggleDarkMode, 
  isOpen, 
  onClose 
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
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 
        transform transition-transform duration-300 ease-in-out z-50 lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <img src="/logo.png" alt="Midoman" className="h-12 w-auto" />
          <button 
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={24} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 flex flex-col justify-between h-[calc(100%-80px)]">
          <div>
            <nav className="space-y-2 mt-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center px-4 py-5 rounded-xl transition-colors cursor-pointer ${
                    item.active 
                      ? 'bg-[#0660D3] text-white' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <item.icon size={24} className="mr-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </nav>

            {/* New Features Section */}
            <div className="mt-8 bg-[#F8F8F8] dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center">
              <ScanFace size={32} className="text-gray-600 dark:text-gray-300 mb-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-200 text-center">New Features</span>
            </div>
          </div>

          {/* Bottom Section */}
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

            {/* Logout Button */}
            <button className="w-full flex items-center justify-center px-4 py-3 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
              <LogOut size={20} className="mr-2" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;