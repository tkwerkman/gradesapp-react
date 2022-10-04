import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBarRoot } from '../components/navbars/nav-root';

export default function Root() {
  return (
    <div className='bg-slate-200/25 h-full'>
      <div id='header-container' className='lg:mx-20 md:mx-15 sm:mx-0 my-0 p-0'>
        <div
          id='title'
          className='text-center bg-red-500/95 text-white my-0 p-1 shadow-lg'
        >
          <h1>Grades App</h1>
        </div>
      </div>

      <div className='lg:mx-20 md:mx-15 sm:mx-0 my-0 p-0'>
        <NavBarRoot />
        <Outlet />
      </div>

      <div id='footer' className=' drop-shadow-sm h-10 w-full'>
        <hr />
        <p className='float-right text-sm text-slate-300 mr-1 pr-1'>
          <i>Tyler Werkman 2022</i>
        </p>
      </div>
    </div>
  );
}
