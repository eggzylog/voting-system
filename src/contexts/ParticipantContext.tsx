import { useGlobalUser } from '@/hooks/useGlobalUser'
import { HackathonSchema } from '@/types/hackathon'
import { UserSchema } from '@/types/user'
import { useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'

export type ParticipantContextType = {
  isParticipant: boolean
  setIsParticipant: React.Dispatch<React.SetStateAction<boolean>>
}

export const ParticipantContext = createContext<ParticipantContextType | null>(
  null
)

export default function ParticipantProvider({
  children
}: {
  children: React.ReactNode
}) {
  const globalUser = useGlobalUser()
  const user = UserSchema.parse(globalUser.user)

  const [isParticipant, setIsParticipant] = useState(false)

  useQuery({
    queryKey: ['hackathon', { isParticipant }],
    queryFn: async () => {
      const res = await fetch('api/v1/hackathons/1')
      if (res.status == 200) {
        const data = await res.json()
        const parsedData = HackathonSchema.parse(data)
        if (parsedData.participants?.includes(user)) setIsParticipant(true)
        return parsedData
      }
    }
  })

  console.log('GLOBAL STATE (User is Participant): ' + isParticipant)

  return (
    <ParticipantContext.Provider value={{ isParticipant, setIsParticipant }}>
      {children}
    </ParticipantContext.Provider>
  )
}
