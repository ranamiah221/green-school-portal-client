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
import AllTeachers from './components/Admin/AllTeachers';
import Student from './components/Admin/Student';

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
      element:<AllStudents></AllStudents>,
      loader:()=>fetch('http://localhost:8000/students')
    },
    {
      path:'allStudents/:id',
      element:<Student></Student>,
      loader:({params})=>fetch(`http://localhost:8000/students/${params.id}`)
    },
    {
      path:'addTeacher',
      element:<AddTeacher></AddTeacher>
    },
    {
      path:'allTeachers',
      element:<AllTeachers></AllTeachers>,
      loader:()=>fetch('http://localhost:8000/teachers')
    },
  ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
