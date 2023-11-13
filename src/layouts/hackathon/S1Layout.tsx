import { Outlet } from 'react-router-dom'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

import VoteProvider from '@/contexts/VoteContext'

const S1Layout = () => {
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

export default S1Layout
