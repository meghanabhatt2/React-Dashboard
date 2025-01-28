
import  { useState } from "react";

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false); // State to handle sidebar visibility

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex">
        {/* Overlay for mobile and medium devices */}
        <div
          className={`fixed inset-0 z-50  ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#1F1F30] text-[#E0E0E0] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold">Logo</h2>
            <button
              className="text-white text-2xl"
              onClick={toggleSidebar}
            >
              &times;
            </button>
          </div>

          <div className="flex flex-col items-center mt-[15px] mb-[25px]">
  {/* Avatar Image */}
  <img 
    src="your-avatar-url.jpg" 
    alt="User Avatar" 
    className="w-24 h-24 rounded-full object-cover bg-gray-500" 
  />
  
  {/* User Name */}
  <p className="mt-2 text-center text-white">User Name</p>
</div>
          <ul className="space-y-4 p-4">
            <li>
              <a href="#" className="text-white hover:text-[#C890A7]">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#C890A7]">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#C890A7]">
                Revenue
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-[#E0E0E0]">
                Orders
              </a>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6">
          {/* Hamburger menu for all devices */}
          <button
            className="text-gray-400 text-3xl"
            onClick={toggleSidebar}
          >
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
