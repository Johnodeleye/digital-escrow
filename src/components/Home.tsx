import React from 'react';
import { Copy, Plus, ArrowUp, ArrowDown, Shield, History, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-4 md:p-6 h-full pb-20 md:pb-6">
      <div className="max-w-8xl mx-2 md:mx-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 h-full">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 md:space-y-10">
          {/* Account Balance Card */}
          <div className="bg-[#0660D3] rounded-lg shadow-sm p-6 text-white relative">
            {/* Account Balance Section */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">Account balance</h2>
                <p className="text-3xl font-bold">0.00 NGN</p>
              </div>
              
              <div className="text-right">
                <p className="text-sm opacity-90">Bank Name</p>
                <p className="text-lg font-medium">N/A</p>
              </div>
            </div>

            {/* Account Number Section */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-sm opacity-90">Account Number</p>
                <p className="text-lg font-medium">N/A</p>
              </div>
              
              <button className="p-2 hover:bg-blue-600 rounded-md transition-colors">
                <Copy size={20} className="text-white" />
              </button>
            </div>

            {/* Generate Account Button */}
            <div className="absolute -bottom-4 left-6">
              <button className="bg-white text-[#0660D3] px-6 py-3 rounded-md hover:bg-gray-100 transition-colors flex items-center font-medium shadow-md">
                <Plus size={20} className="mr-2" />
                Generate Account
              </button>
            </div>
          </div>

          {/* Quick Actions*/}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Quick actions</h3>
            <div className="flex items-center justify-between space-x-2 md:space-x-4">
              {[
                { icon: ArrowDown, label: 'Withdraw', color: 'text-green-600' },
                { icon: ArrowUp, label: 'Deposit', color: 'text-blue-600' },
                { icon: Shield, label: 'Escrow', color: 'text-purple-600' },
                { icon: History, label: 'History', color: 'text-orange-600' }
              ].map((action) => (
                <div key={action.label} className="flex flex-col items-center flex-1">
                  <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 w-12 h-12 md:w-14 md:h-14 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center mb-2">
                    {/* Use different size classes for mobile vs desktop */}
                    <div className="text-lg md:text-xl">
                      <action.icon className={action.color} />
                    </div>
                  </button>
                  <span className="font-medium text-gray-700 dark:text-gray-200 text-xs md:text-sm text-center">{action.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/*  Banner */}
          <div className="relative bg-[#FFF2E7] rounded-lg shadow-sm px-4 md:px-6 py-6 md:py-8 flex items-center overflow-hidden">
            {/* Left Content */}
            <div className="flex flex-col space-y-4 z-10">
              {/* Logo */}
              <img src="/logo.png" alt="Logo" className="h-auto w-auto max-w-[120px] md:max-w-none" />

              {/* Text + Button */}
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  Fund 100% Secured
                </h3>
                <button className="bg-white text-gray-800 px-4 md:px-5 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center font-medium shadow text-sm md:text-base">
                  Create escrow
                 
                  <div className="text-base md:text-lg ml-2">
                    <ChevronRight />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="absolute bottom-0 right-2 md:right-4">
              <img
                src="/man.png"
                alt="Security"
                className="h-44 md:h-52 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Deposit History - Full Height with Centered Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-full flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">Deposit history</h3>
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <img 
              src="/deposit.png" 
              alt="No deposit history" 
              className="mx-auto mb-6 max-w-[150px] md:max-w-[200px]"
            />
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              You have not deposited
            </p>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs text-sm md:text-base">
              Send money to the account number to deposit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;