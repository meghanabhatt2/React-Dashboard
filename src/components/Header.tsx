import React, { useState } from 'react';
import { Bell, ChevronDown, User,Calendar } from 'lucide-react';
import CustomModal from './CustomModal'; // Import the Modal component
import DateRangeSelector from './DateRange'; // Import the DateRangeSelector component
const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false); // Modal state


  const toggleDropdown = (): void => {
    setDropdownOpen(!dropdownOpen);
  };

  const openModal = (): void => {
    setModalOpen(true); // Open modal when calendar is clicked
  };

  const closeModal = (): void => {
    setModalOpen(false); // Close modal
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 p-4 text-white">
      {/* Left Side: Dashboard Text */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Right Side: Notifications and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="relative hover:text-gray-400" aria-label="Notifications cursor-pointer">
          <Bell className="w-6 h-6 cursor-pointer" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Calendar Icon for Date Range Selector */}
        <button
          onClick={openModal}
          className="flex items-center space-x-2 hover:text-gray-400 cursor-pointer"
          aria-label="Open Date Range Selector"
        >
          <Calendar className="w-6 h-6 cursor-pointer" />
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 hover:text-gray-400 cursor-pointer"
            aria-label="User Profile"
          >
          
            <User className="w-6 h-6 cursor-pointer" />
            <ChevronDown className="w-5 h-5 cursor-pointer" />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-gray-800 cursor-pointer"
              role="menu"
              aria-labelledby="dropdown-button"
            >
              <ul className="py-2">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  Settings
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Date Range Selector */}
      <CustomModal isOpen={modalOpen} onRequestClose={closeModal}>
        <DateRangeSelector />
      </CustomModal>
    </header>
  );
};

export default Header;
