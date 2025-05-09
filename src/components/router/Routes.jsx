import {
  createBrowserRouter,
} from "react-router-dom";
import Main from '../../layouts/Main';
import Dashboard from '../Admin/Dashboard';
import AllStudents from '../Admin/AllStudents';
import AddStudent from '../Admin/AddStudent';
import AddTeacher from '../Admin/AddTeacher';
import AllTeachers from '../Admin/AllTeachers';
import Student from '../Admin/Student';
import SignUp from '../Admin/SignUp';
import SignIn from '../Admin/SignIn';
import Subjects from '../Admin/Subjects';
import NowHome from '../../DefaultPage/NowHome';
import T_Home from '../Teachers/T_Home';
import CreateNew from '../Teachers/CreateNew/CreateNew';
import CreateQuestion from '../Teachers/CreateNew/CreateQuestion';
import TeacherDashBoard from "../../layouts/TeacherDashBoard";
import StudentDashBoard from "../../layouts/StudentDashBoard";
import Notice from "../Admin/Notice";
import T_SignIn from "../Teachers/T_SignIn";
import Tests from "../Teachers/Tests";
import T_Profile from "../Teachers/T_Profile";
import SignInPages from "../../DefaultPage/SignInPages";
import S_SignIn from "../Students/S_SignIn";


const router = createBrowserRouter([
  {
    path: '/',
    element: <NowHome></NowHome>,
  },
  {
    path: 'sign-in-pages',
    element: <SignInPages></SignInPages>,
  },
  // admin register...
  {
    path: 'admin-register',
    element: <SignUp></SignUp>,
  },
  // admin signin
  {
    path: 'sign-in-pages/admin-signIn',
    element: <SignIn></SignIn>,
  },
  {
    path: "dashboard",
    element: <Main></Main>,
    children: [
      {
        path: 'home',
        element: <Dashboard></Dashboard>,
      },
      {
        path: 'addStudent',
        element:<AddStudent></AddStudent>
      },
       {
      path: 'allStudents',
      element: <AllStudents></AllStudents>,
      loader: () => fetch('http://localhost:8000/students')
    },
    {
      path: 'allStudents/:id',
      element: <Student></Student>,
      loader: ({ params }) => fetch(`http://localhost:8000/students/${params.id}`)
    },
    {
      path: 'addTeacher',
      element: <AddTeacher></AddTeacher>
    },
    {
      path: 'allTeachers',
      element: <AllTeachers></AllTeachers>,
      loader: () => fetch('http://localhost:8000/teachers')
    },
    {
      path: 'subjects',
      element: <Subjects></Subjects>
    },
    {
      path: 'notice',
      element: <Notice></Notice>
    },
    ]
  },

  // teacher signIn..
  {
    path: 'sign-in-pages/teacher-signIn',
    element: <T_SignIn></T_SignIn>,
  },
  {
    path: 'teacher',
    element: <TeacherDashBoard></TeacherDashBoard>,
    children: [
      {
        path: 't_home',
        element: <T_Home></T_Home>,
      },
      {
        path: 't_test',
        element: <Tests></Tests>
      },
      {
        path: 't_result',
        element: <div>result</div>
      },
      {
        path: 't_profile',
        element: <T_Profile></T_Profile>
      },
      {
        path: 't_create',
        element: <CreateNew></CreateNew>
      },
      {
        path: 't_create/create-questions',
        element: <CreateQuestion></CreateQuestion>
      },
      {
        path: 't_signIn',
        element: <T_SignIn></T_SignIn>
      },


    ]
  },

  // student Signin
  {
    path: 'sign-in-pages/student-signIn',
    element: <S_SignIn></S_SignIn>,
  },
  {
    path: 'student',
    element: <StudentDashBoard></StudentDashBoard>,
    children: [
      {
        path: 's_home',
        element: <div>students homes</div>
      },
      {
        path: 's_test',
        element: <div>students test Data</div>
      },
      {
        path: 'on_going_test',
        element: <div>students on going test data</div>
      },
      {
        path: 's_profile',
        element: <div>students homes profile</div>
      },

    ]
  },


  // teacher dashBoard..
  // {
  //   path: 'teacher',
  //   element: <TeacherDashBoard></TeacherDashBoard>,
  //   children: [
  //     {
  //       path: 't_home',
  //       element: <T_Home></T_Home>,
  //     },
  //     {
  //       path: 't_test',
  //       element: <Tests></Tests>
  //     },
  //     {
  //       path: 't_result',
  //       element: <div>result</div>
  //     },
  //     {
  //       path: 't_profile',
  //       element: <T_Profile></T_Profile>
  //     },

  //     {
  //       path: 't_create',
  //       element: <CreateNew></CreateNew>
  //     },
  //     {
  //       path: 't_create/create-questions',
  //       element: <CreateQuestion></CreateQuestion>
  //     },
  //     {
  //       path: 't_signIn',
  //       element: <T_SignIn></T_SignIn>
  //     },


  //   ]
  // },
  // student dashboard...
  



]);

export default router;


//   children:[
//   {
//   path: "dashboard",
//   element:<Main></Main>,
//   children: [
//     {
//       path: 'dashboard',
//       element:<Dashboard></Dashboard>,
//     },
//     {
//       path: '/signIn',
//       element: <SignIn></SignIn>,
//     },
//     {
//       path: '/signUp',
//       element: <SignUp></SignUp>
//     },
//     {
//       path: 'addStudent',
//       element: <AddStudent></AddStudent>
//     },
//    
//   ]
// },
//   ]
// },