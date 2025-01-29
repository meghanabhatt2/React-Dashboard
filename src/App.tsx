// import react  from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import DashboardLayout from "./components/DashboardLayout";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
      children: [
      {
        path: '/', // Default route
        element: <DashboardLayout />, // Child content
      },
    ]
  },
  // {
  //   path: '/',
  //   element: <DashboardLayout />, // Parent layout
  //   children: [
  //     {
  //       path: '/', // Default route
  //       element: <DashBoard />, // Child content
  //     },
    
  //   ],
  // },
 
]);

function App() {
 

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
