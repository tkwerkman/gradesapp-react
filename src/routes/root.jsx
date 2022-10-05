import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBarRoot, NavRootNew } from '../components/navbars/nav-root';
import { SiteHeader } from '../components/header/header';
export default function Root() {
  return (
    <SiteHeader>

      <div className='lg:mx-20 md:mx-15 sm:mx-0 my-0 p-0'>
				<NavRootNew />
        {/* <NavBarRoot /> */}
        <Outlet />
      </div>

      <div id='footer' className=' drop-shadow-sm h-10 w-full'>
        <hr />
        <p className='float-right text-sm text-slate-300 mr-1 pr-1'>
          <i>Tyler Werkman 2022</i>
        </p>
      </div>
    </SiteHeader>
  );
}
