import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import KpiCard from "./KpiCard";
import PieChart from "../components/charts/PieChart";
import DrillDownChart from "../components/DrillDownChart";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import User from "./User";

function DashboardLayout() {
  return (
    <>
      {/* widgets section start */}

      <div className="mb-[30px] mt-[30px]">
        <DndProvider backend={HTML5Backend}>
          <KpiCard />
        </DndProvider>
      </div>

      {/* widgets section end */}

      <div className="grid gap-8 md:grid-cols-2 mt-[25px] mb-[25px]">
        {/* Revenue Trends */}
        <div className=" text-white  p-6 rounded-lg  shadow-lg overflow-x-auto">
          {/* bg-gray-800 */}
          <h2 className="text-xl font-semibold mb-4 text-blue-500 ">
            Monthly Sales: Target vs Actual
          </h2>
          <div className="w-full max-w-full ">
            <BarChart />
          </div>
        </div>

        <div className=" p-6 rounded-lg shadow-lg overflow-x-auto text-white  ">
          <div className="w-full max-w-full ">
            <DrillDownChart />
          </div>
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 mt-[25px] mb-[25px]">
        <div className=" text-[white] p-6 rounded-lg shadow-lg overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-blue-500 animate-pulse">
            Revenue Trends
          </h2>
          <div className="w-full max-w-full ">
            <LineChart />
          </div>
          <div className="w-full max-w-full">
            <User />
          </div>
        </div>

        <div className="p-6 rounded-lg shadow-lg overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-blue-500 animate-pulse">
            Customer Segments
          </h2>
          <div className="w-full max-w-full ">
            <PieChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
