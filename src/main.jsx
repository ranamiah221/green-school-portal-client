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
import SignIn from './components/Admin/SignIn';
import Subjects from './components/Admin/Subjects';
import T_Home from './components/Teachers/T_Home';
import CreateNew from './components/Teachers/CreateNew/CreateNew';
import CreateQuestion from './components/Teachers/CreateNew/CreateQuestion';



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
      path:'/signIn',
      element:<SignIn></SignIn>,
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
    {
      path:'subjects',
      element:<Subjects></Subjects>
    },
    {
      path:'t_home',
      element:<T_Home></T_Home>
    },
    {
      path:'t_test',
      element:<div>This is test page</div>
    },
    {
      path:'t_result',
      element:<div>This is result page</div>
    },
    {
      path:'t_profile',
      element:<div>This is profile page</div>
    },

    {
      path:'t_create',
      element:<CreateNew></CreateNew>
    },
    {
      path:'create-questions',
      element:<CreateQuestion></CreateQuestion>
    },

  ]
  },
 

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
