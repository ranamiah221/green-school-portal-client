import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/Main';
import Dashboard from './components/Admin/Dashboard';
import AddStudent from './components/Admin/AddStudent';
import AllStudents from './components/Admin/AllStudents';
import AddTeacher from './components/Admin/AddTeacher';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
      path:'/',
      element:<Dashboard></Dashboard>,
    },
    {
      path:'addStudent',
      element:<AddStudent></AddStudent>
    },
    {
      path:'allStudents',
      element:<AllStudents></AllStudents>
    },
    {
      path:'addTeacher',
      element:<AddTeacher></AddTeacher>
    },
  ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
