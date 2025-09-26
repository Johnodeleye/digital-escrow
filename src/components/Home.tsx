import React from 'react';
import { Copy, Plus, ArrowUp, ArrowDown, Shield, History, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-6 h-full">
      <div className="max-w-8xl mx-8 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        
        {/* LEFT SIDE */}
        <div className="space-y-10">
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

          {/* Quick Actions - Horizontal Layout */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Quick actions</h3>
            <div className="flex items-center justify-between space-x-4">
              {[
                { icon: ArrowDown, label: 'Withdraw', color: 'text-green-600' },
                { icon: ArrowUp, label: 'Deposit', color: 'text-blue-600' },
                { icon: Shield, label: 'Escrow', color: 'text-purple-600' },
                { icon: History, label: 'History', color: 'text-orange-600' }
              ].map((action) => (
                <div key={action.label} className="flex flex-col items-center flex-1">
                  <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 w-14 h-14 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center mb-2">
                    <action.icon size={22} className={action.color} />
                  </button>
                  <span className="font-medium text-gray-700 dark:text-gray-200 text-sm">{action.label}</span>
                </div>
              ))}
            </div>
          </div>

{/* NEW SECTION: Fund Security Banner */}
<div className="relative bg-[#FFF2E7] rounded-lg shadow-sm px-6 py-8 flex items-center overflow-hidden">
  {/* Left Content */}
  <div className="flex flex-col space-y-4 z-10">
    {/* Logo */}
    <img src="/logo.png" alt="Logo" className="h-auto w-auto" />

    {/* Text + Button */}
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Fund 100% Secured
      </h3>
      <button className="bg-white text-gray-800 px-5 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center font-medium shadow">
        Create escrow
        <ChevronRight size={20} className="ml-2" />
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="absolute bottom-0 right-4">
    <img
      src="/man.png"
      alt="Security"
      className="h-120 w-auto object-contain"
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
              className="mx-auto mb-6 max-w-[200px]"
            />
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
              You have not deposited
            </p>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs">
              Send money to the account number to deposit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;