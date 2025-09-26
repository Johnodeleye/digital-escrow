import React, { useState, useEffect } from 'react';
import LeftSidebar from './components/LeftSidebar';
import Header from './components/Header';
import Home from './components/Home';
import MobileBottomBar from './components/MobileBottomBar';
import MobileSidebar from './components/MobileSidebar';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    // Auto Check system preference or saved preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'));
    setDarkMode(isDark);
    
    // Apply dark mode class to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#076DF2',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 500,
          },
          success: { duration: 3000 },
          error: {
            style: { background: '#ef4444' },
          },
        }}
      />
      
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="hidden md:block">
          <LeftSidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          <Header toggleSidebar={toggleMobileSidebar} />
          
          {/* Mobile Sidebar */}
          <MobileSidebar 
            isOpen={mobileSidebarOpen} 
            onClose={closeMobileSidebar}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          
          {/* Main content */}
          <div className="main-content flex-1 overflow-y-auto pt-16 md:pt-0">
            <Home />
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Bar */}
      <div className="md:hidden">
        <MobileBottomBar />
      </div>
    </div>
  );
}