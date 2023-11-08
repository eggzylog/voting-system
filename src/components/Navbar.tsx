import daedalusLogo from '@/assets/png/daedalus.png'
import { Link, NavLink } from 'react-router-dom'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/clerk-react'

const Navbar = () => {
  return (
    <div className="navbar rounded-[30px] border-background-lighter bg-[#2020537e] px-24 py-[28px]">
      <div className="navbar-start">
        <Link to="/">
          <img
            src={daedalusLogo}
            alt="Daedalus Logo"
            className="h-[57px] w-[238px]"
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
  )
}

export default Navbar
