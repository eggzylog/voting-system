import { Daedalus } from '@/assets'
import { Link, NavLink } from 'react-router-dom'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className="container mx-auto pt-0 md:pt-3 lg:pt-5">
      <div className="navbar rounded-b-[20px] border-background-lighter bg-[#2020537e]  px-6 py-3 md:rounded-[25px] md:px-8 md:py-4 lg:rounded-[30px] lg:px-12 xl:px-24 ">
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
              <li className="text-lg">
                <NavLink to="/hackathon">Hackathon</NavLink>
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li className="text-2xl">
              <NavLink to="/hackathon">Hackathon</NavLink>
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
