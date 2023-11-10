import HackathonAuth from '@/components/HackathonAuth'
import HackathonNoAuth from '@/components/HackathonNoAuth'
import { Hackathon, HackathonSchema } from '@/types/hackathon'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const Season1 = () => {
  const { data: hackathon } = useQuery({
    queryKey: ['hackathon'],
    queryFn: async () => {
      const res = await fetch('api/v1/hackathons/1')
      if (res.status == 200) {
        const data = await res.json()
        console.log(data)
        return HackathonSchema.parse(data)
      }
    }
  })

  console.log(hackathon)
  return (
    <>
      <div>
        <p>{hackathon?.name}</p>
        <p>{hackathon?.description}</p>
      </div>

      {/* more stuff here */}
      <SignedIn>
        <HackathonAuth />
      </SignedIn>
      <SignedOut>
        <HackathonNoAuth />
      </SignedOut>
    </>
  )
}

export default Season1
