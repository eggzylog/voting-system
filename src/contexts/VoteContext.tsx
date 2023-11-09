import { useGlobalUser } from '@/hooks/useGlobalUser'
import { useQuery } from '@tanstack/react-query'
import { createContext, useState } from 'react'

export type VoteContextType = {
  hasVote: boolean
  setHasVote: React.Dispatch<React.SetStateAction<boolean>>
}

export const VoteContext = createContext<VoteContextType | null>(null)

export default function VoteProvider({
  children
}: {
  children: React.ReactNode
}) {
  const { user } = useGlobalUser()
  const [hasVote, setHasVote] = useState(false)

  useQuery({
    queryKey: ['hasVote', { user }],
    queryFn: async () => {
      const res = await fetch(`/api/v1/votes?user=${user.userId}`)
      const data = await res.json()
      setHasVote(() => data.hasVote)
    }
  })

  console.log('GLOBAL STATE (User has vote): ' + hasVote)

  return (
    <VoteContext.Provider value={{ hasVote, setHasVote }}>
      {children}
    </VoteContext.Provider>
  )
}
