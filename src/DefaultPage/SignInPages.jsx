import React from 'react';
import { Link } from 'react-router-dom';

const SignInPages = () => {
    return (
        <>  <h1 className='text-4xl font-bold text-center mt-16 mb-8 text-slate-800 '>Please Choose Your Role</h1>
            <div className='flex justify-between w-full gap-16 px-16'>
                {/* Admin signIn...... */}
                <Link to={'admin-signIn'} className='w-1/3 h-72 border rounded flex items-center justify-center bg-purple-800 text-white'>
                    <h2 className='text-2xl font-bold'>Admin SignIn</h2>
                </Link>


                {/* Teacher signIn...... */}
                <Link to={'teacher-signIn'} className='w-1/3 h-72 border rounded flex items-center justify-center bg-purple-800 text-white'>
                    <h2 className='text-2xl font-bold'>Teacher SignIn</h2>
                </Link>


                {/* Student signIn...... */}
                <Link to={'student-signIn'} className='w-1/3 h-72 border rounded flex items-center justify-center bg-purple-800 text-white'>
                    <h2 className='text-2xl font-bold'>Student SignIn</h2>
                </Link>
            </div>
        </>

    );
};

export default SignInPages;