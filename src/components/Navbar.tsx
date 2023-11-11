import { Link, NavLink } from 'react-router-dom'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react'

import { Daedalus } from '@/assets'

const Navbar = () => {
  return (
    <div className="container mx-auto pt-0 md:pt-3 lg:pt-5">
      <div className="navbar rounded-b-[20px] border-background-lighter bg-[#2020537e] px-6  py-3 outline outline-[#4e4e8336] md:rounded-[25px] md:px-8 md:py-4 lg:rounded-[30px] lg:px-12 xl:px-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li className="text-lg">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-lg">
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className="dropdown dropdown-end">
                <label tabIndex={0}>
                  <span>Hackathon</span>
                  <svg
                    className="hidden h-4 w-4 fill-current opacity-60 sm:inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 space-y-2 border-2 border-[#39395B] bg-background-darker p-2 text-2xl shadow"
                >
                  <li>
                    <NavLink to="/hackathon/season-1">Season 1</NavLink>
                  </li>
                  <li>
                    <NavLink to="/hackathon/season-2">Season 2</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img
              src={Daedalus}
              alt="Daedalus Logo"
              className="md:w-56 lg:w-64"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-16 px-[32px]">
            <li className="text-2xl">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-inherit font-bold text-white underline underline-offset-[15px]'
                    : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-2xl underline-offset-[15px] hover:underline">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-inherit font-bold text-white underline underline-offset-[15px]'
                    : ''
                }
              >
                About Us
              </NavLink>
            </li>
            {/* <li className="text-2xl underline-offset-[15px] hover:underline">
              <NavLink
                to="/hackathon"
                className={({ isActive }) =>
                  isActive
                    ? 'bg-inherit font-bold text-white underline underline-offset-[15px]'
                    : ''
                }
              >
                Hackathon
              </NavLink> */}
            <li className="dropdown dropdown-end text-2xl">
              {/* clickable */}
              <label tabIndex={0}>
                <span>Hackathon</span>
                <svg
                  className="hidden h-4 w-4 fill-current opacity-60 sm:inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content rounded-box menu-lg z-[1] mt-3 w-52 space-y-2 border-2 border-[#39395B] bg-background-darker p-2 text-2xl shadow"
              >
                <li>
                  <NavLink
                    to="/hackathon/season-1"
                    className={({ isActive }) =>
                      isActive ? 'bg-[#ffffffd2] font-bold text-[#11113A]' : ''
                    }
                  >
                    Season 1
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hackathon/season-2"
                    className={({ isActive }) =>
                      isActive ? 'bg-[#ffffffd2] font-bold text-[#11113A]' : ''
                    }
                  >
                    Season 2
                  </NavLink>
                </li>
              </ul>

              {/* hoverable */}
              {/* <div className="dropdown dropdown-bottom dropdown-end dropdown-hover">
                  <label tabIndex={0}>Hackathon </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 mt-4 shadow bg-background-darker border-2 border-[#39395B] rounded-box w-52 space-y-2 text-center">
                     <li className='text-2xl'><NavLink to="/hackathon/season-1">Season 1</NavLink></li>
                     <li className='text-2xl'><NavLink to="/hackathon/season-2">Season 2</NavLink></li>
                  </ul>
               </div> */}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <SignedOut>
            <SignInButton afterSignInUrl="/" mode="modal">
              <button className="text-xl">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default Navbar
