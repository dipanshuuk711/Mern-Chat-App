import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className='w-full rounded-lg shadow-md p-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-500'> ChatApp</span>
        </h1>
        <form action="">
          <div className=''>
            <label className='p-2 label'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Dipanshu' className='w-full input input-bordered h-10' />
          </div>

          <div className=''>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='dipashuuk711' className='w-full input input-bordered h-10' />
          </div>

          <div className=''>
            <label className='p-2 label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Password' className='w-full input input-bordered h-10' />
          </div>

          <div className=''>
            <label className='p-2 label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>

          <GenderCheckbox />

          <a href="#" className='text-sm hover:underline hover:text-blue-600 inline-block ms-1'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;