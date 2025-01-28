// import react  from 'react'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    // children:[
    //   {
    //     path:"product",
    //     element:<Product/>
    //   }
    // ]
  },
 
]);

function App() {
 

  return (
    <>
   <RouterProvider router={router} />
    </>
  )
}

export default App
