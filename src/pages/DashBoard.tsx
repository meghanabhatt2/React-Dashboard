import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Sidebar from "../components/Sidebar";
// import DashboardLayout from "../components/DashboardLayout"
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
function DashBoard() {
  const theme = useSelector((state: RootState) => state.theme); // Access theme state
  return (
    <>
      <div
        className={
          theme === "dark"
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        <div className="flex flex-col md:flex-row bg-gradient-to-tr ">
          <Sidebar />
          <div className="flex-1  p-6 ">
            <Header />
            <Outlet />
            {/* <DashboardLayout/> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard;
