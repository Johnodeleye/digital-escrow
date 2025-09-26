import React, { useState, useEffect } from 'react';
import LeftSidebar from './components/LeftSidebar';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or saved preference
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

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <div className="flex flex-col md:flex-row">

        <LeftSidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
       
          <Header />
          
          
          <Home />
        </div>
      </div>
    </div>
  );
}