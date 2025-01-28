

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
// import ThemeToggle from '../components/ToggleTheme'; // Your toggle button
import DashboardLayout from "../components/DashboardLayout"

// import DrillDownChart from '../components/DrillDownChart';
function DashBoard() {
    const theme = useSelector((state: RootState) => state.theme); // Access theme state
  return (
<>
<div className={theme === 'dark' ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      {/* Render your app's components */}
      {/* <ThemeToggle /> */}
      <DashboardLayout/>
    </div>

</>
  )
}

export default DashBoard