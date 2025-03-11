import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Dashboard from './components/Admin/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[{
      path:'/',
      element:<Dashboard></Dashboard>
    }]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
