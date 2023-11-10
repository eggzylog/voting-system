import HackatonProvider from '@/contexts/HackathonContext'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Link, Outlet } from 'react-router-dom'

export default function S2Layout() {
  return (
    <>
      <SignedIn>
        <HackatonProvider>
          <Outlet />
        </HackatonProvider>
      </SignedIn>
      <SignedOut>
        <div>
          <Link to="/sign-in">Sign In To Continue</Link>
        </div>
      </SignedOut>
    </>
  )
}
