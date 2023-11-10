import { Outlet } from 'react-router-dom'
import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'

import HackatonProvider from '@/contexts/HackathonContext'

export default function S2Layout() {
  return (
    <>
      <SignedIn>
        <HackatonProvider>
          <Outlet />
        </HackatonProvider>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" afterSignInUrl="/">
          Sign In To Continue
        </SignInButton>
      </SignedOut>
    </>
  )
}
