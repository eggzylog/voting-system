import daedalusLogo from '@/assets/png/daedalus.png';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <div className="navbar bg-[#04bfd87f] px-24 py-[28px] rounded-[30px] border-background-lighter ">
      <div className="navbar-start">
         {/* <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               <li><a>Item 1</a></li>
               <li>
                  <a>Parent</a>
                  <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                  </ul>
               </li>
               <li><a>Item 3</a></li>
            </ul>
         </div> */}
         <img src={daedalusLogo} alt="Daedalus Logo" className="w-[238px] h-[57px]"/>
      </div>
      <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-[32px] gap-16">
            <li className='text-2xl'><NavLink to="/">Home</NavLink></li>
            <li className='text-2xl'><NavLink to="/about">About Us</NavLink></li>
            <li className='text-2xl'><NavLink to="/hackathon">Hackathon</NavLink></li>
         </ul>
      </div>
      <div className='navbar-end'>
         <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
               <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            </label>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
               <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
               </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
            </ul>
         </div>
      </div>
   </div>
   //  <div className="navbar bg-base-100">
   //    {/* company logo */}
   //    <div className="flex-1">
   //      <Link to={'/'} className="btn btn-ghost text-xl normal-case">
   //        daisyUI
   //      </Link>
   //    </div>

   //    <div className="flex-none gap-2">
   //      {/* links */}
   //      <div className="flex-none">
   //        <ul className="menu menu-horizontal px-1">
   //          <li>
   //            <NavLink to={'/'}>Home</NavLink>
   //          </li>
   //          <li>
   //            <NavLink to={'/about'}>About Us</NavLink>
   //          </li>
   //          <li>
   //            <NavLink to={'/hackathon'}>Hackathon</NavLink>
   //          </li>
   //        </ul>
   //      </div>
   //      <SignedIn>
   //        {/* profile photo */}
   //        {/* <div className="dropdown dropdown-end">
   //          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
   //            <div className="w-10 rounded-full">
   //              <img src="https://picsum.photos/100/100" alt="profile photo" />
   //            </div>
   //          </label>
   //          <ul
   //            tabIndex={0}
   //            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
   //          >
   //            <li>
   //              <a className="justify-between">
   //                Profile
   //                <span className="badge">New</span>
   //              </a>
   //            </li>
   //            <li>
   //              <a>Settings</a>
   //            </li>
   //            <li>
   //              <a>Logout</a>
   //            </li>
   //          </ul>
   //        </div> */}
   //        <UserButton />
   //      </SignedIn>
   //    </div>
   //  </div>
  )
}

export default Navbar
