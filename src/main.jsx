import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';

import {
  RouterProvider,
} from "react-router-dom";

import AuthProvider from './context/AuthProvider';
import router from './components/router/Routes';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TeacherAuthProvider from './TeacherContext/TeacherAuthProvider';
import StudentAuthProvider from './components/StudentContext/StudentAuthProvider';

const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <TeacherAuthProvider>
        <StudentAuthProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ToastContainer />
          </QueryClientProvider>
        </StudentAuthProvider>
      </TeacherAuthProvider>
    </AuthProvider>
  </StrictMode>,
)
