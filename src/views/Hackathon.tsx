import HackathonWAuth from '@/components/HackathonwAuth'
import HackathonNoAuth from '@/components/HackathonNoAuth'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

const Hackathon = () => {
  return (
    <>
      <SignedIn>
        <HackathonWAuth />
      </SignedIn>
      <SignedOut>
        <HackathonNoAuth />
      </SignedOut>
    </>
  )
}

export default Hackathon
