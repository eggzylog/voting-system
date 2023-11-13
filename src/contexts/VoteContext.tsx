import { createContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { useGlobalUser } from '@/hooks/useGlobalUser'

const apiVersion = import.meta.env.VITE_API_VERSION

export type VoteContextType = {
  votedFor: number | null
  setVotedFor: React.Dispatch<React.SetStateAction<number | null>>
}

export const VoteContext = createContext<VoteContextType | null>(null)

export default function VoteProvider({
  children
}: {
  children: React.ReactNode
}) {
  const { user } = useGlobalUser()
  const [votedFor, setVotedFor] = useState<number | null>(null)

  useQuery({
    queryKey: ['votedFor', { votedFor, user }],
    queryFn: async () => {
      const res = await fetch(`/api/${apiVersion}/votes?hackathon=1&user=${user.userId}`)
      const data = await res.json()
      if (!res.ok) return null
      setVotedFor(() => data.votedFor)
      return data.votedFor
    }
  })

  console.log('[GLOBAL STATE] User voted for TeamID: ' + votedFor)
  return (
    <VoteContext.Provider value={{ votedFor, setVotedFor }}>
      {children}
    </VoteContext.Provider>
  )
}
