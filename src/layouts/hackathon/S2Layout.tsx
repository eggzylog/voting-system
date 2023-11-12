import { Outlet } from 'react-router-dom'
import { SignInButton, SignedIn, SignedOut } from '@clerk/clerk-react'

import HackatonProvider from '@/contexts/HackathonContext'
import { Alert } from '@/components/Alert'

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
          <div className="container mx-auto grid md:grid-cols-4 lg:grid-cols-6">
            <Alert />
          </div>
        </SignInButton>
      </SignedOut>
    </>
  )
}
