import { Hackathon, HackathonSchema } from '@/types/hackathon'
import { useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'

const hackathonPlaceholder: Hackathon = {
  hackathonId: 0,
  name: '',
  season: 0,
  registrationDeadline: new Date(Date.now()),
  eventStart: new Date(Date.now()),
  eventEnd: new Date(Date.now()),
  description: '',
  createdAt: new Date(Date.now()),
  createdBy: null,
  participants: []
}

export type HackathonContextType = {
  hackathon: Hackathon
  setHackathon: React.Dispatch<React.SetStateAction<Hackathon>>
}

export const HackathonContext = createContext<HackathonContextType | null>(null)

export default function HackatonProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [hackathon, setHackathon] = useState(hackathonPlaceholder)

  useQuery({
    queryKey: ['hackathon'],
    queryFn: async () => {
      const res = await fetch('api/v1/hackathons/2')
      if (res.status == 200) {
        const data = await res.json()
        const parsedData = HackathonSchema.parse(data)
        setHackathon(parsedData)
        return parsedData
      }
    }
  })

  return (
    <HackathonContext.Provider value={{ hackathon, setHackathon }}>
      {children}
    </HackathonContext.Provider>
  )
}
