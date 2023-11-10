import VoteProvider from '@/contexts/VoteContext'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { Outlet } from 'react-router-dom'

export default function S1Layout() {
  return (
    <>
      <SignedIn>
        <VoteProvider>
          <Outlet />
        </VoteProvider>
      </SignedIn>
      <SignedOut>
        <Outlet />
      </SignedOut>
    </>
  )
}
