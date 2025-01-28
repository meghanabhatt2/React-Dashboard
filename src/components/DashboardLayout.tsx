
// import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import KpiCard from './KpiCard';
import PieChart from '../components/charts/PieChart';
import DrillDownChart from '../components/DrillDownChart';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import User from './User';
function DashboardLayout() {
  return (
  <>
  <div className="flex flex-col md:flex-row bg-gradient-to-tr from-black via-gray-800 to-[#2b3f96]">
      {/* Sidebar */}
   <Sidebar/>

      {/* Main Content Area */}
      <div className="flex-1 bg-[black] p-6 ">
        {/* The content of the right side */}
     
<Header/>

{/* widgets section start */}


<div className="mb-[30px] mt-[30px]">
<DndProvider backend={HTML5Backend}>
        <KpiCard />
        </DndProvider>
      </div>

{/* widgets section end */}


<div className="grid gap-8 md:grid-cols-2 mt-[25px] mb-[25px]">
  {/* Revenue Trends */}
  <div className=" text-white bg-gray-800 p-6 rounded-lg  shadow-lg overflow-x-auto">
    <h2 className="text-xl font-semibold mb-4 text-gray-200">Monthly Sales: Target vs Actual</h2>
    <div className="w-full max-w-full">
   
      <BarChart />
    </div>
  </div>

  {/* Monthly Sales: Target vs Actual */}
  <div className=" p-6 rounded-lg shadow-lg overflow-x-auto text-white  ">
    {/* <h2 className="text-xl font-semibold mb-4">Monthly Sales: Target vs Actual</h2> */}
    <div className="w-full max-w-full">
    <DrillDownChart />
    </div>
  </div>
</div>
<div className="grid gap-8 md:grid-cols-2 mt-[25px] mb-[25px]">
  {/* Revenue Trends */}
  <div className=" text-[white] p-6 rounded-lg shadow-lg overflow-x-auto">
    <h2 className="text-xl font-semibold mb-4">Revenue Trends</h2>
    <div className="w-full max-w-full">
 
    <LineChart />
    </div>
    <div className="w-full max-w-full">
 
<User/>
 </div>
  </div>

  {/* Monthly Sales: Target vs Actual */}
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-x-auto">
    <h2 className="text-xl font-semibold mb-4 text-white">Customer Segments</h2>
    <div className="w-full max-w-full ">
 
    <PieChart />
    </div>
  </div>
</div>




        {/* <Outlet />  */}
      


      </div>

  

    </div>
  </>
  )
}

export default DashboardLayout