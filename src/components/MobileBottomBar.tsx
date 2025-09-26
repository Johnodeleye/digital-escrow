import React from 'react';
import { Home, Shield, ScanFace, CreditCard, Settings } from 'lucide-react';

const MobileBottomBar = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Shield, label: 'Escrow', active: false },
    { icon: ScanFace, label: '', active: false, center: true },
    { icon: CreditCard, label: 'Transaction', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg transition-colors ${
              item.center 
                ? 'flex-1 max-w-[60px]' 
                : 'flex-1'
            }`}
          >
            <button
              className={`flex flex-col items-center justify-center w-full ${
                item.active && !item.center 
                  ? 'text-black dark:text-white' 
                  : !item.center 
                  ? 'text-gray-500 dark:text-gray-400' 
                  : ''
              }`}
            >
              <div className={`relative flex items-center justify-center ${
                item.center 
                  ? 'bg-[#0660D3] text-white w-12 h-12 rounded-full -mt-6' 
                  : 'w-10 h-10'
              }`}>
                <item.icon 
                  size={item.center ? 28 : 24} 
                  className={item.center ? 'text-white' : ''} 
                />
              </div>
              {!item.center && (
                <span className="text-xs mt-1">{item.label}</span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileBottomBar;